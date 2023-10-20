import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/ Home.jsx';
import ContextProvider from './context/ContexProvider';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MainHome from './pages/MainHome';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Orders from './pages/Orders';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <MainHome />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/details/:id",
    element: <ProductDetails />
  },
  {
    path: "/orders",
    element: <Orders />
  },
  {
    path: "/contact",
    element: <Contact />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
