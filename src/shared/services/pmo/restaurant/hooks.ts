import type { PromiseState } from "@shared/helpers/usePromise"
import type { City, Restaurant, State } from "@shared/services/pmo"

import { useEffect } from "react"

import usePromise from "@shared/helpers/usePromise"
import {
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
