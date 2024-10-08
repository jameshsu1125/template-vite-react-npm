import ReactDOM from "react-dom/client";
import App from "./app";

if (document.getElementById("app")?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
}
