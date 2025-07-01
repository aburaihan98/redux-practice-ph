import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>Redux practice</h1>

      <button onClick={handleIncrement}>increment</button>
      <div>{counter.count}</div>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
}

export default App;
