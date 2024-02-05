import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout className="bg-red-100">
      <h1>My Orders</h1>

      {context.order.map((order, index) => {
        <Link key={index} to={`my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
          ;
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;
