import { create } from "zustand";

export const useEvents = create((set, get) => ({
  specialEvents: [],
  weeklyEvents: [],
  addSpecialEvent: (newEvent) => set((state) => ({ specialEvents: [...state.specialEvents, newEvent]})),
  addWeeklyEvent: (newEvent) => set((state) => ({ weeklyEvents: [...state.weeklyEvents, newEvent]})),
  loadSpecialEvents: (listEvents) => set({ specialEvents: listEvents}),
  loadWeeklyEvents: (listEvents) => set({ weeklyEvents: listEvents}),
}));
