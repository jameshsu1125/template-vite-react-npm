import { createRoot } from 'react-dom/client';
import Node from './index';

export function mount(el: string | Element) {
  const container = typeof el === 'string' ? document.querySelector(el) : el;

  if (!container) {
    throw new Error(`mount(): element not found for "${el}"`);
  }

  const root = createRoot(container);
  root.render(<Node />);

  return () => root.unmount();
}
