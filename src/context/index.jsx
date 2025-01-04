import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ShopingCartContext = createContext();

const ShopingCartProvider = ({ children }) => {
  // shoping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen((prevState) => !prevState);
  };

  // Checkout side menu - open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen((prevState) => !prevState);
  };

  // Product detail - show product
  const [showProduct, setShowProduct] = useState({});

  // Shoping cart - add product to cart
  const [cartProduct, setCartProduct] = useState([]);

  // Shoping cart - order
  const [order, setOrder] = useState([]);

  return (
    <ShopingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        setIsProductDetailOpen,
        openProductDetail,
        showProduct,
        setShowProduct,
        cartProduct,
        setCartProduct,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        order,
        setOrder,
      }}>
      {children}
    </ShopingCartContext.Provider>
  );
};

ShopingCartProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopingCartContext, ShopingCartProvider };
