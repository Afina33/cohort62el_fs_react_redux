import { createAppSlice } from "store/createAppSlice"
import { FeedbackInterface } from "./types";


const InintialState : FeedbackInterface = {
  likeCount: 0,
  dislikeCount: 0,
}
export const feedbackSlice = createAppSlice({
    name:  "FEEDBACK",

    initialState: InintialState,

    reducers:{
        like: (state: FeedbackInterface) => {
            state.likeCount += 1
        },
        dislike: (state: FeedbackInterface) => {
            state.dislikeCount += 1
        },
        // reset:(state: FeedbackInterface) => {
        //     state.likeCount = 0,
        //     state.dislikeCount = 0
        // }
        reset: ()=> InintialState
    },
    selectors: {
        likeCount: state =>{
            return state.likeCount
        },
         dislikeCount: state =>{
            return state.dislikeCount
        },
    },

});

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors