import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/layout/Main';
import { productsAndCartLoader } from './components/loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        loader: ()=>fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        loader: productsAndCartLoader,
        // loader: () => fetch('products.json'),
        element: <Orders></Orders>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
    // errorElement: <ErrorPage />,   
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
