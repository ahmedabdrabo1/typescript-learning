enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

let currentStatus: OrderStatus = OrderStatus.Pending;

console.log(currentStatus);