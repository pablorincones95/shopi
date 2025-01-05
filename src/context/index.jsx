import { createContext, useCallback, useEffect, useState } from "react";
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

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

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

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter((product) =>
      product.category.name
        .toLowerCase()
        .includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = useCallback(
    (searchType, products, searchByTitle, searchByCategory) => {
      if (searchType === "BY_TITLE") {
        return filteredProductsByTitle(products, searchByTitle);
      }

      if (searchType === "BY_CATEGORY") {
        return filteredProductsByCategory(products, searchByCategory);
      }

      if (searchType === "BY_TITLE_AND_BY_CATEGORY") {
        return filteredProductsByCategory(products, searchByCategory).filter(
          (product) =>
            product.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
      }

      if (!searchType) {
        return products;
      }
    },
    []
  );

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy(
          "BY_TITLE_AND_BY_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );

    if (searchByTitle && !searchByCategory)
      setFilteredProducts(
        filterBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );

    if (searchByCategory && !searchByTitle)
      setFilteredProducts(
        filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );

    if (!searchByCategory && !searchByTitle)
      setFilteredProducts(
        filterBy(null, products, searchByTitle, searchByCategory)
      );
  }, [products, searchByTitle, searchByCategory, filterBy]);

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
        searchByCategory,
        setSearchByCategory,
      }}>
      {children}
    </ShopingCartContext.Provider>
  );
};

ShopingCartProvider.propTypes = {
  children: PropTypes.node,
};

export { ShopingCartContext, ShopingCartProvider };
