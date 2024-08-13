import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
// import { Pokemon } from "./pokemon/";
import { TodoApp } from "./TodoApp";
import "./index.css";
//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Pokemon /> */}
      <TodoApp />
    </Provider>
  </StrictMode>
);
