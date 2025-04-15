import { useEffect } from "react"

import usePromise, { PromiseState } from "@shared/helpers/usePromise"
import { Order, getOrder, getOrders } from "@shared/services/pmo"

export function useOrder(id: string): PromiseState<Order> {
  const [promiseState, update] = usePromise<Order>()

  useEffect(() => {
    update(getOrder(id))
  }, [update, id])

  return promiseState
}

export function useOrders(): PromiseState<Order[]> {
  const [promiseState, update] = usePromise<Order[]>()

  useEffect(() => {
    update(getOrders())
  }, [update])

  return promiseState
}
