import { pmo } from "@shared/services/pmo"

import { Order } from "./interfaces"

export const statuses: Array<Order["status"]> = [
  "new",
  "preparing",
  "delivery",
  "delivered",
]

export const titles: Record<Order["status"], string> = {
  new: "New Order!",
  preparing: "Preparing",
  delivery: "Out for Delivery",
  delivered: "Delivered",
}

export async function getOrder(id: string): Promise<Order> {
  const data = await pmo<Order>({
    method: "GET",
    path: `/orders/${id}`,
  })

  return data
}

export async function getOrders(): Promise<Order[]> {
  const { data } = await pmo<{ data: Order[] }>({
    method: "GET",
    path: "/orders",
  })

  return data
}
