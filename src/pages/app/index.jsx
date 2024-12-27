import { Home } from "../home";
import { MyAccount } from "../my-Account/index";
import { MyOrder } from "../my-order/index";
import { MyOrders } from "../my-orders/index";
import { SignIn } from "../sign-in";
import { NotFound } from "../not-found/index";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { ShopingCartProvider } from "../../context/index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> },
    { path: "/sign-in", element: <SignIn /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShopingCartProvider>
  );
};

export { App };
