import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./Redux/store/store";

// Create a root element for React DOM to render the app to
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the Provider component with the store as its prop
root.render(
  <Provider store={store}>
  <App />
</Provider>
);

