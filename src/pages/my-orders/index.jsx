import { useContext } from "react";
import { ShopingCartContext } from "../../context";
import { Layout } from "../../components/layout";
import { OrdersCard } from "../../components/orders-card";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { order } = useContext(ShopingCartContext);

  return (
    <Layout>
      <div className="flex  items-center w-80 relative justify-center mb-4">
        <h1 className="font-medium text-xl">My orders</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.map((order, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProduct={order.totalProduct}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export { MyOrders };
