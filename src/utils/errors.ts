export function getErrorMessage(error: unknown, fallbackMessage: string): string {
  if (error instanceof Error) {
    // TODO: better error handling needed!
    if (error.message === 'Unauthorized') {
      return 'Incorrect email or password';
    }

    return error.message;
  }

  return String(error) || fallbackMessage;
}
