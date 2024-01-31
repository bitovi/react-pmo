import type { PromiseState } from "@shared/hooks/usePromise"
import type { Order } from "@shared/services/pmo"

import { useEffect } from "react"

import usePromise from "@shared/hooks/usePromise"
import { getOrders } from "@shared/services/pmo"

export function useOrders(): PromiseState<Order[]> {
  const [promiseState, update] = usePromise<Order[]>()

  useEffect(() => {
    update(getOrders())
  }, [update])

  return promiseState
}
