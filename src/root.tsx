import ReactDOM from 'react-dom/client';
import Node from '.';

const App = () => {
  return (
    <div>
      <Node />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
