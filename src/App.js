// import Login from "./Screems/Auth/Login/Login";
import { Provider } from "react-redux";
import Register from "./Screems/Auth/Register/Register";
import "./styles.css";
import { store } from "./Store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Register />
      </Provider>
    </>
  );
}
