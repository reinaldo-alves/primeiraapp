import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/userContext';
import { MoodStore } from './contexts/moodContext';
import { ProductStore } from './contexts/productContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStore>
      <MoodStore>
        <ProductStore>
          <App />
        </ProductStore>
      </MoodStore>
    </UserStore>
  </React.StrictMode>
);
