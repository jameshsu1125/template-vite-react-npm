import ReactDOM from "react-dom/client";

const App = () => {
  return <div>app</div>;
};

if (document.getElementById("app")?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
}
