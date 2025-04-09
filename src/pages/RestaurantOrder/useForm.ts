import type { Order } from "@shared/services/pmo"

import { useCallback, useState } from "react"

type NewOrder = Omit<Order, "_id" | "status" | "items" | "restaurant"> & {
  items: Record<string, boolean>
}

type NewOrderForm = NewOrder & {
  subtotal: number
  isEmpty: boolean
  isValid: boolean
  isPending: boolean
}

export default function useForm(): [
  NewOrderForm,
  {
    setValue: (
      key: keyof Omit<NewOrder, "items">,
      value: NewOrder[typeof key],
    ) => void
    setItem: (itemId: string, value: boolean) => void
    submit: () => void
  },
] {
  const [order, setOrder] = useState<NewOrder>({
    name: "",
    address: "",
    phone: "",
    items: {},
  })

  const setValue = useCallback(
    (key: string, value: string) =>
      setOrder((order) => ({ ...order, [key]: value })),
    [],
  )

  const setItem = useCallback(
    (itemId: string, value: boolean) =>
      setOrder((order) => {
        return {
          ...order,
          items: { ...order.items, [itemId]: value },
        }
      }),
    [],
  )

  const submit = useCallback(() => {
    //
  }, [])

  return [
    {
      ...order,
      subtotal: 0,
      isEmpty: true,
      isValid: true,
      isPending: false,
    },
    { setValue, setItem, submit },
  ]
}
