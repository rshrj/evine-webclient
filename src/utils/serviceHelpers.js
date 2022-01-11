import { env } from '../config';

export const apiUrl = env.apiUrl || 'http://localhost:5001/api/v1';

export const errorWithToast = (message) =>
  new Error(message, {
    cause: {
      success: false,
      toasts: [message]
    }
  });

export const rejectWithToast = (message) =>
  Promise.reject(errorWithToast(message));
