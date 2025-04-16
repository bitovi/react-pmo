import { useEffect } from "react"

import usePromise, { PromiseState } from "@shared/helpers/usePromise"
import {
  City,
  Restaurant,
  State,
  getCities,
  getRestaurant,
  getRestaurants,
  getStates,
} from "@shared/services/pmo"

export function useRestaurant(slug?: string): PromiseState<Restaurant> {
  const [promiseState, update] = usePromise<Restaurant>()

  useEffect(() => {
    if (slug) {
      update(getRestaurant(slug))
    } else {
      update(undefined)
    }
  }, [update, slug])

  return promiseState
}

export function useRestaurants(
  state: string,
  city: string,
): PromiseState<Restaurant[]> {
  const [promiseState, update] = usePromise<Restaurant[]>()

  useEffect(() => {
    if (state && city) {
      update(getRestaurants(state, city))
    } else {
      update(undefined)
    }
  }, [update, state, city])

  return promiseState
}

export function useStates(): PromiseState<State[]> {
  const [promiseState, update] = usePromise<State[]>()

  useEffect(() => {
    update(getStates())
  }, [update])

  return promiseState
}

export function useCities(state: string): PromiseState<City[]> {
  const [promiseState, update] = usePromise<City[]>()

  useEffect(() => {
    if (state) {
      update(getCities(state))
    } else {
      update(undefined)
    }
  }, [update, state])

  return promiseState
}
