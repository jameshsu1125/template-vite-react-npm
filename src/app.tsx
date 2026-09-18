import ReactDOM from 'react-dom/client';
import Node from '.';
import { mount } from './standalone';

if (import.meta.env.VITE_DEMO_MODE === 'standalone') {
  mount('#app');
} else {
  const App = () => (
    <div>
      <Node />
    </div>
  );

  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
}
