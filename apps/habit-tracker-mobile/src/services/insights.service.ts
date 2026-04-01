import { apiClient } from './api/client';
import { ApiResponse } from './api/types';

export interface InsightsData {
  totalHabits: number;
  completedToday: number;
  currentStreak: number;
  longestStreak: number;
  weeklyCompletionRate: number;
}

export const insightsService = {
  getStats: () =>
    apiClient.get<ApiResponse<InsightsData>>('/insights/stats'),

  getStreaks: (habitId: string) =>
    apiClient.get<ApiResponse<{ current: number; longest: number }>>(`/insights/streaks/${habitId}`),
};
