import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { couterSliceActions, couterSliceSelectors } from "store/redux/counterrSlice/couterrSlice";


import "./styles.css";


function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(couterSliceSelectors.count);
  const onMinus = ()=>{
    dispatch(couterSliceActions.minus())
  };

  const onPlus = ()=>{
    dispatch(couterSliceActions.plus())
  };
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
