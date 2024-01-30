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
