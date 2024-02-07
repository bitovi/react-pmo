import type { Order } from "@shared/services/pmo"

import { useCallback, useState } from "react"

// import usePromise from "@shared/hooks/usePromise"

type NewOrder = Omit<Order, "_id" | "status" | "items" | "restaurant"> & {
  items: string[]
}

type NewOrderForm = NewOrder & {
  subtotal: number
  isValid: boolean
  isPending: boolean
}

export default function useForm(): [
  NewOrderForm,
  {
    setName: (value: string) => void
    setAddress: (value: string) => void
    setPhone: (value: string) => void
    updateItem: (itemId: string, value: boolean) => void
    submit: () => void
  },
] {
  const [order, setOrder] = useState<NewOrder>({
    name: "",
    address: "",
    phone: "",
    items: [],
  })

  // const [promiseState, update] = usePromise<boolean>()

  const setName = useCallback(
    (name: string) => setOrder((order) => ({ ...order, name })),
    [],
  )
  const setAddress = useCallback(
    (address: string) => setOrder((order) => ({ ...order, address })),
    [],
  )
  const setPhone = useCallback(
    (phone: string) => setOrder((order) => ({ ...order, phone })),
    [],
  )

  const updateItem = useCallback(
    (itemId: string, value: boolean) =>
      setOrder((order) => {
        const items = new Set(order.items)
        if (value) {
          items.add(itemId)
        } else {
          items.delete(itemId)
        }

        return {
          ...order,
          items: [...items],
        }
      }),
    [],
  )

  const submit = useCallback(() => {
    //
  }, [])

  const isValid =
    order.name && order.address && order.phone && order.items.length > 0
      ? true
      : false

  return [
    {
      ...order,
      subtotal: 0,
      isValid,
      isPending: false,
    },
    { setName, setAddress, setPhone, updateItem, submit },
  ]
}
