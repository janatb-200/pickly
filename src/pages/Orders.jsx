import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem("picklyOrders")
      ) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>
          View your previous Pickly orders.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <h2>No orders yet</h2>
          <p>
            Your completed orders will appear here.
          </p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div
              className="order-card"
              key={order.id}
            >
              <div className="order-card-header">
                <div>
                  <h3>{order.orderNumber}</h3>
                  <p>{order.date}</p>
                </div>

                <strong>
                  ${order.total}
                </strong>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div
                    className="order-item"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="order-item-info">
                      <h4>{item.title}</h4>

                      <p>
                        Quantity: {item.quantity}
                      </p>

                      <p>
                        $
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-customer">
                <p>
                  <strong>Customer:</strong>{" "}
                  {order.customer.fullName}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {order.customer.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;