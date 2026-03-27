import ordersData from '../data/orders.json';

// Función para obtener un pedido por su ID
export const getOrderById = (id) => {
  return ordersData.orders.find(order => order.orderId === id);
};

// Función para actualizar el estado de un pedido
export const updateOrderStatus = (id, newStatus) => {
  const order = ordersData.orders.find(order => order.orderId === id);
  if (order) {
    const statusIndex = order.timeline.findIndex(step => step.status === newStatus);
    if (statusIndex !== -1) {
      order.timeline[statusIndex].done = true;
      order.lastUpdated = new Date().toISOString();
    }
  }
};

// Función para formatear el estado de un pedido para visualización
export const formatStatus = (status) => {
  const statusMap = {
    order_confirmed: 'Order Confirmed',
    processing: 'Processing',
    shipped: 'Shipped',
    in_transit: 'In Transit',
    customs: 'Customs',
    out_for_delivery: 'Out for Delivery',
    delivered: 'Delivered'
  };
  return statusMap[status] || status;
};