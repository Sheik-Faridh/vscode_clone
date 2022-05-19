import ReactDOM from 'react-dom/client';
import App from 'App';
import ThemeWrapper from '@themes';
import { FileExplorerStore } from '@store';

const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(
  <ThemeWrapper>
    <App />
  </ThemeWrapper>,
);

//FileExplorerStore.init();
