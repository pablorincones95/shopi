import { useContext } from "react";
import { ShopingCartContext } from "../../context";
import "./index.css";
import { FaX } from "react-icons/fa6";

const ProductDetail = () => {
  const {
    isProductDetailOpen,
    openProductDetail,
    showProduct: product,
  } = useContext(ShopingCartContext);
  return (
    <>
      {isProductDetailOpen && (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white z-20 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-xl">Detail</h2>
            <div onClick={openProductDetail}>
              <FaX />
            </div>
          </div>
          <figure>
            <img
              className="w-full h-full rounded-lg"
              src={product?.image}
              alt={product?.title}
            />
          </figure>
          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">
              <b>Price:</b> ${product?.price}
            </span>
            <span className="font-medium text-md">
              <b>Name:</b> {product?.title}
            </span>
            <span className="font-medium text-sm">
              <b>Category:</b> {product?.category}
            </span>
          </p>
        </aside>
      )}
    </>
  );
};

export { ProductDetail };
