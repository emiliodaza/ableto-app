import React, { useState } from 'react';
import OrderLookup from '../components/shipping/OrderLookup';
import ShippingTimeline from '../components/shipping/ShippingTimeline';
import { getOrderById } from '../utils/shipping';

const Shipping = () => {
  const [order, setOrder] = useState(null);

  const handleOrderSearch = (orderId) => {
    const orderData = getOrderById(orderId);
    setOrder(orderData);
  };

  return (
    <div className="shipping-container">
      <h1>Track Your Order</h1>
      <OrderLookup onOrderSearch={handleOrderSearch} />
      {order && (
        <div>
          <h2>Order Details</h2>
          <ShippingTimeline order={order} />
        </div>
      )}
    </div>
  );
};

export default Shipping;