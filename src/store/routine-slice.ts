import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Routine {
    id: string,
    name: string,
    frequency: 'daily' | 'weekly',
    completedDates: string[],
    createdAt: string
}

interface RoutineState {
    routines: Routine[]
}

const initialState: RoutineState = {
    routines: []
}

const routineSlice = createSlice({
    name: 'routines',
    initialState,
    reducers: {
        addRoutine: (state, action: PayloadAction<{ name: string, frequency: 'daily' | 'weekly' }>) => {
            const newRoutine: Routine = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString()
            };
            state.routines.push(newRoutine);
        },
        removeRoutine: (state, action: PayloadAction<string>) => {
            state.routines = state.routines.filter((routine) => (routine.id !== action.payload));
        },
        toggleRoutine: (state, action: PayloadAction<{ id: string; date: string }>) => {
            const routine = state.routines.find((routine) => routine.id === action.payload.id);
            if (routine) {
                const index = routine.completedDates.indexOf(action.payload.date);
                if (index > -1) {
                    routine.completedDates.splice(index, 1);
                } else {
                    routine.completedDates.push(action.payload.date);
                }
            }
        }
    }
})

export const { addRoutine, removeRoutine, toggleRoutine } = routineSlice.actions;
export default routineSlice.reducer;

