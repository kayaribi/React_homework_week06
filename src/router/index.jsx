import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import Notfound from "../pages/Notfound";

const router = createHashRouter([
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'products',
        element: <ProductPage />,
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: '*',
        element: <Notfound />,
      }
    ]
  }
])

export default router;