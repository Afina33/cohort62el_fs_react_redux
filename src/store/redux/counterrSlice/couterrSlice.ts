import { createAppSlice } from "store/createAppSlice";

const counterrInintiaState = {
    count: 0
} 

export const couterSleice = createAppSlice({
    name: "COUNTER",
    initialState: counterrInintiaState,
    reducers: {
        plus: (state)=>{
            state.count = state.count + 1;
        },
        minus: (state) =>{
            state.count = state.count - 1;
        },
    },
    selectors: {
        count: state => {
            return state.count;
        }
    }
});

export const couterSliceActions = couterSleice.actions;
export const couterSliceSelectors = couterSleice.selectors;
