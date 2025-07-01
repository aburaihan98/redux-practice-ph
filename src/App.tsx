import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();

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
      <div>0</div>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
}

export default App;
