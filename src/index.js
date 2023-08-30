import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import MainPages from './pages/MainPages';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Mene2';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <MainPages/>},
      {path: 'mains', element: <MainPages/>},
      {path:'mains/menu1',element:<Menu1/>},
      {path:'mains/menu2',element:<Menu2/>},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
