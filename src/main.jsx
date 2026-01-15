import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { PreferencesProvider } from './preferences/PreferencesProvider';
import ThemedRouter from './ThemedRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreferencesProvider>
      <ThemedRouter />
    </PreferencesProvider>
  </StrictMode>
);
