import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout className="bg-red-100">
      <h1 className="font-medium text-xl mb-3">My Orders</h1>

      {context.order.map((order, index) => (
        <Link key={index} to={`${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
