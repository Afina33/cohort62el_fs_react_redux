import Button from "components/Button/Button";
import { Buttonwithcount_container, Count, Feedback_control, FeedbackWrapper } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks";
import {  feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedbackSlice/feedbackSlice";


export default function Feedback() {
   const dispatch = useAppDispatch()
    const like = useAppSelector(feedbackSliceSelectors.likeCount);
    const dislike = useAppSelector(feedbackSliceSelectors.dislikeCount);
   
  const onLike = ()=>{
    dispatch(feedbackSliceActions.like())
  };
  const onDislike = ()=>{
    dispatch(feedbackSliceActions.dislike())
  };
  const onResetResults = ()=>{
   dispatch(feedbackSliceActions.reset())
  };
  return (
   <FeedbackWrapper>
      <Feedback_control>
        <Buttonwithcount_container>
          <Button name="Like" onClick={onLike}/>
          <Count>{like}</Count>
        </Buttonwithcount_container>
        <Buttonwithcount_container>
          <Button name="Dislike" onClick={onDislike}/>
          <Count>{dislike}</Count>
        </Buttonwithcount_container>
      </Feedback_control>
      <Button name="Reset Results" onClick={onResetResults}/>
   </FeedbackWrapper>
  );
}
