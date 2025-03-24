export function getErrorMessage(error: unknown, fallbackMessage: string): string {
  if (error instanceof Error) return error.message;

  return String(error) || fallbackMessage;
}
