import { createAppSlice } from "store/createAppSlice"


const InintialState = {
  likeCount: 0,
  dislikeCount: 0,
}
export const feedbackSlice = createAppSlice({
    name:  "FEEDBACK",

    initialState: InintialState,

    reducers:{
        like: state => {
            state.likeCount += 1
        },
        dislike: state => {
            state.dislikeCount += 1
        },
        reset:state => {
            state.likeCount = 0,
            state.dislikeCount = 0
        } 
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