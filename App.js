import Navigation from "./navigation";

// Redux
import { store } from "./app/redux";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
