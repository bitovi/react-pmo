import type { PromiseAction, PromiseState } from "./interfaces"

import { useCallback, useReducer } from "react"

export default function usePromise<Data>(): [
  PromiseState<Data>,
  (promise?: Promise<Data>) => void,
] {
  const [state, dispatch] = useReducer(reducer<Data>, {
    data: undefined,
    pending: false,
    error: undefined,
  })

  const updater = useCallback((promise?: Promise<Data>) => {
    if (!promise) {
      dispatch({ type: "reset" })
      return
    }

    dispatch({ type: "request" })

    promise
      .then((data) => dispatch({ type: "success", data: data }))
      .catch((error) => dispatch({ type: "error", error: error }))
  }, [])

  return [state, updater]
}

function reducer<Data>(
  state: PromiseState<Data>,
  action: PromiseAction<Data>,
): PromiseState<Data> {
  if (action.type === "reset") {
    return {
      data: undefined,
      pending: false,
      error: undefined,
    }
  }

  if (action.type === "request") {
    return {
      data: undefined,
      pending: true,
      error: undefined,
    }
  }

  if (action.type === "success") {
    return {
      data: action.data,
      pending: false,
      error: undefined,
    }
  }

  if (action.type === "error") {
    return {
      data: undefined,
      pending: false,
      error: action.error,
    }
  }

  throw Error("useFetch: Unknown action.")
}
