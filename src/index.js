import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter }from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    children: []
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
</React.StrictMode>
)

reportWebVitals(sendToVercelAnalytics);
