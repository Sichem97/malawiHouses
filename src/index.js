import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './pages/css/main.css'
import {BrowserRouter} from 'react-router-dom'
import { RentalProvider } from './pages/RentalProvider';
import { MaterialUIControllerProvider } from "./DashBord/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <RentalProvider>
          <MaterialUIControllerProvider>
            <App />
          </MaterialUIControllerProvider>
        </RentalProvider>
      </BrowserRouter>
    
  </React.StrictMode>,
);


