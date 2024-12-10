import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from '../pages';
import { ErrorElement } from '../components';

// loaders
import { loader as landingLoader } from '../pages/Landing/Landing';
import { loader as singleProductLoader } from '../pages/SingleProduct/SingleProduct';
import { loader as productsLoader } from '../pages/Products/Products';
import { loader as checkoutLoader } from '../pages/Checkout/Checkout';
import { loader as ordersLoader } from '../pages/Orders/Orders';

// actions
import { action as registerAction } from '../pages/Register/Register';
import { action as loginAction } from '../pages/Login/Login';
import { action as checkoutAction } from '../components/CheckoutForm/CheckoutForm';
import { store } from '../store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default AppRoutes;
