import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { GatewayWebhookDto } from './ops-api.types';
export declare class PaymentGatewayWebhookController {
    private readonly gateway;
    constructor(gateway: PaymentGatewayService);
    receive(dto: GatewayWebhookDto): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PaymentGatewayInflowStatus;
    }>;
    receivePaystack(headers: Record<string, string | string[] | undefined>, body: Record<string, unknown>): Promise<{
        received: boolean;
        id: string;
        status: import("../../generated/prisma/enums").PaymentGatewayInflowStatus;
        booked?: undefined;
    } | {
        received: boolean;
        booked: boolean;
        id?: undefined;
        status?: undefined;
    }>;
    receiveFlutterwave(headers: Record<string, string | string[] | undefined>, body: Record<string, unknown>, req: RawBodyRequest<Request>): Promise<{
        received: boolean;
        id: string;
        status: import("../../generated/prisma/enums").PaymentGatewayInflowStatus;
        booked?: undefined;
    } | {
        received: boolean;
        booked: boolean;
        id?: undefined;
        status?: undefined;
    }>;
    receiveMonnify(headers: Record<string, string | string[] | undefined>, body: Record<string, unknown>): Promise<{
        received: boolean;
        id: string;
        status: import("../../generated/prisma/enums").PaymentGatewayInflowStatus;
        booked?: undefined;
    } | {
        received: boolean;
        booked: boolean;
        id?: undefined;
        status?: undefined;
    }>;
}
