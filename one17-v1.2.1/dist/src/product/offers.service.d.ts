import { PrismaService } from '../prisma/prisma.service';
import { ProspectusSheetService } from '../parameters/prospectus-sheet.service';
import { OfferCard } from './offers.types';
export declare class OffersService {
    private readonly prisma;
    private readonly prospectusSheet;
    constructor(prisma: PrismaService, prospectusSheet: ProspectusSheetService);
    listActiveOffers(): Promise<OfferCard[]>;
    getOfferDetail(productCode: string): Promise<OfferCard>;
    private buildCard;
}
