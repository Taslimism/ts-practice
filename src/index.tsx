import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root: HTMLDivElement | null = document.querySelector("#root");
if (!root) throw new Error("Failed to find the root element");
ReactDOM.createRoot(root).render(<App />);
