export class DocumentTransmissionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DocumentTransmissionError';
  }
}

// Invariant 55(b): "MD DOCUMENT TRANSMISSION -- MD uploads/transmits
// documents into the platform routed to named officers with acknowledgment
// tracking (document register + notification + task)."
export interface TransmitDocumentInput {
  title: string;
  fileReference: string;
  docType?: string;
  recipientUserIds: string[];
}
