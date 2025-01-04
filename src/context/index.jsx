import { createContext, useEffect, useState } from "react";
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

  // Get products
  const [products, setProducts] = useState(null);

  // Get filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
    }
  }, [products, searchByTitle]);

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
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
      }}>
      {children}
    </ShopingCartContext.Provider>
  );
};

ShopingCartProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopingCartContext, ShopingCartProvider };
