import {create} from "zustand";
import {devtools} from "zustand/middleware";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounterStore = create<CounterStore>()( devtools((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1})) //New Values being set to state.
    },
    decrement: () => {
        set((state) => ({count: state.count - 1})) //New Values being set to state.
    }
})))

// export const useCounterStore = create()(devtools())
