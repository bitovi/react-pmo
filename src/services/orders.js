import { get } from './_base'

export async function getOrders() {
  const orders = await get('/orders')

  return orders.data.map((order) => prepareOrder(order))
}

export async function getOrder(id) {
  const order = await get(`/orders/${id}`)

  return prepareOrder(order)
}

function prepareOrder({ address, ...order }) {
  if (address) {
    order.address = {
      street: address,
    }
  }

  return order
}
