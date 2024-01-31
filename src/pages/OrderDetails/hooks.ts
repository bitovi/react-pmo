import type { PromiseState } from "@shared/hooks/usePromise"
import type { Order } from "@shared/services/pmo"

import { useEffect } from "react"

import usePromise from "@shared/hooks/usePromise"
import { getOrder } from "@shared/services/pmo"

export function useOrder(id: string): PromiseState<Order> {
  const [promiseState, update] = usePromise<Order>()

  useEffect(() => {
    update(getOrder(id))
  }, [update, id])

  return promiseState
}
