import type { PromiseState } from "@shared/helpers/usePromise"
import type { Order } from "@shared/services/pmo"

import { useEffect } from "react"

import usePromise from "@shared/helpers/usePromise"
import { getOrder, getOrders } from "@shared/services/pmo"

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
