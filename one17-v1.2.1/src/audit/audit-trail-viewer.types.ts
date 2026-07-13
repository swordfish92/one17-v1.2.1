export class AuditTrailViewerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuditTrailViewerError';
  }
}
