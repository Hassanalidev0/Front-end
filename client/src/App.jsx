import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './views/Home';
import Blog from './views/Blog';
import About from './views/About';
import ProductDetail from './components/ProductDetail';
import Login from './views/auth/Login';
import React, { useLayoutEffect } from 'react'
import ProductList from './components/ProductList';
import Cart from './views/Cart';

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element:<Blog />,
    },
    {
      path: "/about",
      element:<About />,
    },
    {
      path: "/productDetail/:productId",
      element:<ProductDetail />,
    },
    {
      path: "/productList",
      element:<ProductList />,
    },
    {
      path: "/cart",
      element:<Cart />,
    }
  ]);
  return (
    
    <div >
    <RouterProvider router={router} />
   </div>
      
  );
}

export default App;
