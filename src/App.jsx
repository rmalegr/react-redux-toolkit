import { useDispatch, useSelector } from "react-redux";
import { incrementTodo, decrementar, incrementByMonto } from "./store/slices";
import "./App.css";

function App() {
  // const counter = useSelector((state) => state.counter.value);
  const counter2 = useSelector((state) => state.contador.count);
  const dispatch = useDispatch();
  console.log(counter2);

  return (
    <>
      <h1>Redux toolkit</h1>
      <hr />
      <br />
      <h2>Contador que viene del state = {counter2}</h2>
      <button onClick={() => dispatch(incrementTodo())}>Increment todo </button>
      <br />
      <h2>Decrement</h2>
      <hr />
      <button onClick={() => dispatch(decrementar())}>Decrementar</button>
      <hr />
      <h2>Incrementar por monto</h2>
      <button onClick={() => dispatch(incrementByMonto(5))}>
        Incrementar por monto * 5
      </button>
      <hr />
    </>
  );
}

export default App;
