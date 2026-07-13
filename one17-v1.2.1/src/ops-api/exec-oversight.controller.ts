import { BadRequestException, Body, Controller, Get, Ip, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ExecOversightService } from '../exec-oversight/exec-oversight.service';
import { ExecOversightError } from '../exec-oversight/exec-oversight.types';
import { WmService } from '../wm/wm.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { StatementService } from '../statement/statement.service';
import { CertificateService } from '../certificate/certificate.service';
import { LetterService } from '../letter/letter.service';
import { ClientMessagingService } from '../client-messaging/client-messaging.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import { StartOversightSessionDto, ProposeOversightPolicyDto } from './ops-api.types';

// Invariant 61(b)-(d) (CEO ruling, 9-Jul-2026, CHECK15): "View portal as
// this client" -- READ-ONLY by construction, not by a checked flag. This
// controller defines ZERO mutating routes over client data (every data
// route below is a GET that re-calls the SAME ID-parameterized service
// method the real portal controller calls); there is structurally nothing
// here for a write request to reach. Every data route resolves its target
// investor/counterparty FROM the caller's own oversight session record
// (never a raw path parameter) so every view is tied to a logged,
// self-owned session -- "the session log cannot be suppressed" (61d).
@Controller('exec-oversight')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ExecOversightController {
  constructor(
    private readonly execOversight: ExecOversightService,
    private readonly wm: WmService,
    private readonly counterparty: CounterpartyService,
    private readonly statements: StatementService,
    private readonly certificates: CertificateService,
    private readonly letters: LetterService,
    private readonly messaging: ClientMessagingService,
    private readonly bureauGateway: BureauGatewayService,
  ) {}

  @Post('sessions')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async startSession(@Body() dto: StartOversightSessionDto, @CurrentUser() user: AuthenticatedUser, @Ip() ip: string) {
    try {
      return await this.execOversight.startSession({ ...dto, viewedByUserId: user.userId, ipAddress: ip });
    } catch (err) {
      if (err instanceof ExecOversightError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('sessions/:id/end')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async endSession(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.execOversight.endSession(id, user.userId);
    } catch (err) {
      if (err instanceof ExecOversightError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Get('log')
  @RequiresCapability('EXEC_OVERSIGHT', 'VIEW')
  async listLog() {
    return this.execOversight.listLog();
  }

  private async resolveSession(sessionId: string, userId: string) {
    try {
      return await this.execOversight.assertSessionOwnedAndActive(sessionId, userId);
    } catch (err) {
      if (err instanceof ExecOversightError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Get('sessions/:id/dashboard')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async dashboard(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const session = await this.resolveSession(id, user.userId);
    return session.principalType === 'INVESTOR'
      ? this.wm.getPortalDashboard(session.investorId!)
      : this.counterparty.getPortalDashboard(session.counterpartyId!);
  }

  @Get('sessions/:id/statements')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async statementAccounts(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const session = await this.resolveSession(id, user.userId);
    if (session.principalType !== 'INVESTOR') throw new BadRequestException('Statements are an investor-portal surface.');
    return this.statements.listAccounts(session.investorId!);
  }

  @Get('sessions/:id/certificates')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async certificateList(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const session = await this.resolveSession(id, user.userId);
    if (session.principalType !== 'INVESTOR') throw new BadRequestException('Certificates are an investor-portal surface.');
    return this.certificates.listCertificates(session.investorId!);
  }

  @Get('sessions/:id/letters')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async letterList(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const session = await this.resolveSession(id, user.userId);
    return session.principalType === 'INVESTOR'
      ? this.letters.listLetterInstances({ investorId: session.investorId! })
      : this.letters.listLetterInstances({ counterpartyId: session.counterpartyId! });
  }

  @Get('sessions/:id/messages')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async messages(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const session = await this.resolveSession(id, user.userId);
    if (session.principalType !== 'INVESTOR') throw new BadRequestException('Client messaging is an investor-portal surface.');
    return this.messaging.listThread(session.investorId!);
  }

  @Get('sessions/:id/bureau-pulls')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async bureauPulls(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    const session = await this.resolveSession(id, user.userId);
    if (session.principalType !== 'COUNTERPARTY') throw new BadRequestException('Bureau pull history is a counterparty-portal surface.');
    return this.bureauGateway.listPullHistory(session.counterpartyId!);
  }

  // --- Invariant 61(c): "the dial" -- governed policy ---

  @Get('policies')
  @RequiresCapability('EXEC_OVERSIGHT', 'VIEW')
  async listPolicies() {
    return this.execOversight.listPolicies();
  }

  @Post('policies')
  @RequiresCapability('EXEC_OVERSIGHT', 'INITIATE')
  async proposePolicy(@Body() dto: ProposeOversightPolicyDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.execOversight.proposePolicy({ ...dto, proposedByUserId: user.userId });
    } catch (err) {
      if (err instanceof ExecOversightError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('policies/:id/approve')
  @RequiresCapability('EXEC_OVERSIGHT', 'APPROVE')
  async approvePolicy(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.execOversight.approvePolicy(id, user.userId);
    } catch (err) {
      if (err instanceof ExecOversightError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
