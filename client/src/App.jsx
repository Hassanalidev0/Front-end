import './App.css';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home';
import Blog from './views/Blog';
import About from './views/About';
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
  ]);
  return (
    
    <div>
    <RouterProvider router={router} />
   </div>
      
  );
}

export default App;
