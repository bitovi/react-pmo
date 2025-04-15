import { useCallback, useState } from "react"

import { PromiseState } from "./interfaces"


export default function usePromise<Data>(): [
  PromiseState<Data>,
  (promise?: Promise<Data>) => void,
] {
  const [state, setState] = useState<PromiseState<Data>>({
    pending: false,
    data: undefined,
    error: undefined,
  })

  const updater = useCallback((promise?: Promise<Data>) => {
    if (promise) {
      setState({ pending: true })

      promise
        .then((data) => setState({ pending: false, data: data }))
        .catch((error) => setState({ pending: false, error: error }))
    } else {
      setState({ pending: false })
    }
  }, [])

  return [state, updater]
}
