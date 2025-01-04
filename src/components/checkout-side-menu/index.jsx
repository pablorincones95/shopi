import { useContext } from "react";
import { ShopingCartContext } from "../../context";
import "./index.css";
import { FaX } from "react-icons/fa6";
import { OrderCard } from "../order-card";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    cartProduct,
    setCartProduct,
    setCount,
    count,
    order,
    setOrder,
  } = useContext(ShopingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProduct.filter((product) => product.id !== id);
    setCartProduct(filteredProducts);
    setCount(count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.01.25",
      products: cartProduct,
      totalProduct: cartProduct.length,
      totalPrice: totalPrice(cartProduct),
    };
    setOrder([...order, orderToAdd]);
    setCartProduct([]);
    setCount(0);
  };

  return (
    <>
      {isCheckoutSideMenuOpen && (
        <aside className="checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white z-20 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-xl">My order</h2>
            <div onClick={openCheckoutSideMenu}>
              <FaX />
            </div>
          </div>

          <div className="overflow-x-auto flex-1">
            {cartProduct.map((product) => (
              <OrderCard
                id={product.id}
                key={product.id}
                title={product.title}
                image={product.images[0]}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))}
          </div>

          <div className="">
            <p className="flex justify-between items-center mb-3">
              <span className="font-medium text-xl">Total: </span>
              <span className="font-medium text-2xl">
                ${totalPrice(cartProduct)}
              </span>
            </p>

            <Link to="/my-orders/last">
              <button
                className="w-full bg-black py-3 text-white rounded-lg"
                onClick={() => handleCheckout()}>
                Checkout
              </button>
            </Link>
          </div>
        </aside>
      )}
    </>
  );
};

export { CheckoutSideMenu };
