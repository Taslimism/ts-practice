import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const root: HTMLDivElement | null = document.querySelector("#root");
if (!root) throw new Error("Failed to find the root element");

ReactDOM.createRoot(root).render(
	<Provider store={store}>
		<App />
	</Provider>
);
