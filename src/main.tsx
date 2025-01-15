import React, { StrictMode } from 'react'; // Добавлен импорт React
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Импорт Provider
import { store } from './store/store.js'; // Импорт Redux-хранилища
import './styles/styles.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Оборачиваем приложение в Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
