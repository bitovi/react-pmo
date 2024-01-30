import type { PromiseState } from "@shared/hooks/usePromise"
import type { Restaurant } from "@shared/services/pmo"

import { useEffect } from "react"

import usePromise from "@shared/hooks/usePromise"
import { getRestaurant } from "@shared/services/pmo"

export function useRestaurant(slug: string): PromiseState<Restaurant> {
  const [promiseState, update] = usePromise<Restaurant>()

  useEffect(() => {
    update(getRestaurant(slug))
  }, [update, slug])

  return promiseState
}
