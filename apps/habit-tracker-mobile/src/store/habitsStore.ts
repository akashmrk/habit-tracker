import { create } from 'zustand';

interface HabitsUIState {
  selectedDate: string; // ISO date string e.g. '2026-04-01'
  setSelectedDate: (date: string) => void;
}

export const useHabitsStore = create<HabitsUIState>((set) => ({
  selectedDate: new Date().toISOString().split('T')[0],
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
