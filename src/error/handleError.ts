import { AppError } from "./types";

export const handleError = (error: unknown): AppError => {
  console.error('Error', error);

  if (!(error instanceof Error)) {
    return {
      error,
      message: 'Unexpected Error. Check console.',
    }
  }

  return {
    error,
    message: error.message,
  }
}