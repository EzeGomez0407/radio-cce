import { create } from "zustand";

export const useEvents = create((set, get) => ({
  specialEvents: [],
  weeklyEvents: [],
  addEvent: (newEvent) => set((state) => ({ events: [...state.events, newEvent]})),
  removeEvent: (idEvent) => set((state) => ({ events: state.events.filter(e=> e.id !== idEvent)})),
  loadSpecialEvents: (listEvents) => set({ events: listEvents}),
  loadWeeklyEvents: (listEvents) => set({ events: listEvents}),
  getEvents: () => {
    get;
  },
}));
