import {create} from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounterStore = create<CounterStore>( (set) => ({
    count: 0,
    increment: () => {
        set({count: 1}) //New Values being set to state.
    },
    decrement: () => {
        set({count: -1})
    }
}))
