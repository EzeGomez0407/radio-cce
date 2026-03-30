import { create } from "zustand";
import { supabase } from "@lib/supabase";

const useEvents = create((set, get) => ({
  events: [],
  addEvent: () => set((state) => ({ bears: state.bears + 1 })),
  removeEvent: () => set({ bears: 0 }),
  updateEvent: (newBears) => set({ bears: newBears }),
  fetchEvents: async () => {
    const { data, error } = await supabase.from("events").select("*");

    if (!error) {
      set({ events: data });
    }
  },
}));
