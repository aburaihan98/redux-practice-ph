import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <h1>Redux practice</h1>

      <button onClick={() => handleIncrement(5)}>increment</button>
      <div>{counter.count}</div>
      <button onClick={() => handleDecrement(1)}>decrement</button>
    </>
  );
}

export default App;
