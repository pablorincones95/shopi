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

  // Product detail - show product
  const [showProduct, setShowProduct] = useState({});

  return (
    <ShopingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        showProduct,
        setShowProduct,
      }}>
      {children}
    </ShopingCartContext.Provider>
  );
};

ShopingCartProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopingCartContext, ShopingCartProvider };
