import { useContext } from "react";
import { Layout } from "../../components/layout/index";
import { OrderCard } from "../../components/order-card";
import { ShopingCartContext } from "../../context";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { order } = useContext(ShopingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    index = order?.length - 1;
  }

  return (
    <Layout>
      <div className="flex  items-center w-80 relative justify-center mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <FaAngleLeft className="cursor-pointer" />
        </Link>

        <h1 className="font-medium text-xl">My order</h1>
      </div>

      <div className="flex flex-col w-80">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export { MyOrder };
