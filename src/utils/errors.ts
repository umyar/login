export function getErrorMessage(error: unknown, fallbackMessage: string): string {
  console.log('error', error);
  if (error instanceof Error) return error.message;

  return String(error) || fallbackMessage;
}
