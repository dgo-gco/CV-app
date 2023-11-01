import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CurriculumContextProvider } from './components/context/CurriculumContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurriculumContextProvider>
      <App />
    </CurriculumContextProvider>
  </React.StrictMode>,
);
