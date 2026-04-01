import { apiClient } from './api/client';
import { ApiResponse } from './api/types';

interface AuthPayload {
  user: { id: string; email: string; fullName: string };
  token: string;
}

export const authService = {
  login: (email: string, password: string) =>
    apiClient.post<ApiResponse<AuthPayload>>('/auth/login', { email, password }),

  signUp: (fullName: string, email: string, password: string) =>
    apiClient.post<ApiResponse<AuthPayload>>('/auth/signup', { fullName, email, password }),

  refreshToken: () =>
    apiClient.post<ApiResponse<{ token: string }>>('/auth/refresh'),
};
