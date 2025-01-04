import { useContext } from "react";
import { ShopingCartContext } from "../../context";
import { FaPlus, FaCheck } from "react-icons/fa6";

const Card = (product) => {
  const {
    count,
    setCount,
    openProductDetail,
    setShowProduct,
    setCartProduct,
    cartProduct,
    setIsCheckoutSideMenuOpen,
  } = useContext(ShopingCartContext);

  const showProduct = (product) => {
    setShowProduct(product);
    openProductDetail();
    setIsCheckoutSideMenuOpen(false);
  };

  const addProductTocart = (event, product) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProduct([...cartProduct, product]);
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProduct.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-2 z-10">
          <FaCheck className="text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-2 z-10"
          onClick={(event) => addProductTocart(event, product.product)}>
          <FaPlus />
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-1">
          {product.product.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.product.images[0]}
          alt={product.product.title}
          onClick={() => showProduct(product.product)}
        />

        {renderIcon(product.product.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{product.product.title}</span>
        <span className="text-lg font-medium">$ {product.product.price}</span>
      </p>
    </div>
  );
};

export { Card };
