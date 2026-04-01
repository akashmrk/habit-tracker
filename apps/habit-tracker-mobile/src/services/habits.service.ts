import { apiClient } from './api/client';
import { ApiResponse, PaginatedResponse } from './api/types';

export interface Habit {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon: string;
  frequency: 'daily' | 'weekly';
  createdAt: string;
}

export interface CreateHabitDto {
  name: string;
  description?: string;
  color: string;
  icon: string;
  frequency: Habit['frequency'];
}

export const habitsService = {
  getAll: () =>
    apiClient.get<PaginatedResponse<Habit>>('/habits'),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Habit>>(`/habits/${id}`),

  create: (data: CreateHabitDto) =>
    apiClient.post<ApiResponse<Habit>>('/habits', data),

  update: (id: string, data: Partial<CreateHabitDto>) =>
    apiClient.patch<ApiResponse<Habit>>(`/habits/${id}`, data),

  delete: (id: string) =>
    apiClient.delete(`/habits/${id}`),

  complete: (id: string, date: string) =>
    apiClient.post<ApiResponse<void>>(`/habits/${id}/complete`, { date }),
};
