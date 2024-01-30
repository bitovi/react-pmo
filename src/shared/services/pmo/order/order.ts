import type { Order } from "./interfaces"

import { pmo } from "../api"

export async function getOrders(): Promise<Order[]> {
  const { data } = await pmo<{ data: Order[] }>({
    method: "GET",
    path: "/orders",
  })

  return data
}

export async function getOrder(id: string): Promise<Order> {
  const data = await pmo<Order>({
    method: "GET",
    path: `/orders/${id}`,
  })

  return data
}
