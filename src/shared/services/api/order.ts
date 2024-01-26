export interface Order {
  _id: string
  name: string
  address: string
  phone: string
  status: string
  items: OrderItem[]
}

export interface OrderItem {
  name: string
  price: number
}

export async function getOrders(): Promise<Order[]> {
  // /api/orders
  return []
}

export async function getOrder(id: string): Promise<Order> {
  return { _id: "1", name: "Order One" } as Order
}
