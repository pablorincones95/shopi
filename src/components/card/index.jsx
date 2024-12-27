import { useContext } from "react";
import { ShopingCartContext } from "../../context";
import { FaPlus } from "react-icons/fa6";

const Card = (product) => {
  const { count, setCount, openProductDetail, setShowProduct } =
    useContext(ShopingCartContext);

  const addCartShoping = () => {
    setCount(count + 1);
  };

  const showProduct = (product) => {
    setShowProduct(product);
    openProductDetail();
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-1">
          {product.product.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.product.image}
          alt={product.product.title}
          onClick={() => showProduct(product.product)}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-2 z-10"
          onClick={addCartShoping}>
          <FaPlus />
        </div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{product.product.title}</span>
        <span className="text-lg font-medium">$ {product.product.price}</span>
      </p>
    </div>
  );
};

export { Card };
