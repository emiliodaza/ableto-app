import React, { useState } from 'react';

const OrderLookup = ({ onOrderSearch }) => {
  const [orderId, setOrderId] = useState('');

  const handleSearch = () => {
    onOrderSearch(orderId);
  };

  return (
    <div className="order-lookup">
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSearch} className="btn-primary">Track Order</button>
    </div>
  );
};

export default OrderLookup;