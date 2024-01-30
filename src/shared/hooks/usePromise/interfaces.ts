export type PromiseState<Data> =
  | SuccessState<Data>
  | ErrorState
  | PendingState
  | InitialState

interface SuccessState<Data> {
  pending: false
  data: Data
  error: undefined
}

interface ErrorState {
  pending: false
  data: undefined
  error: string
}

interface PendingState {
  pending: true
  data: undefined
  error: undefined
}

interface InitialState {
  pending: false
  data: undefined
  error: undefined
}

export type PromiseAction<Data> =
  | SuccessAction<Data>
  | ErrorAction
  | RequestAction
  | ResetAction

interface SuccessAction<Data> {
  type: "success"
  data: Data
}

interface ErrorAction {
  type: "error"
  error: string
}

interface RequestAction {
  type: "request"
}

interface ResetAction {
  type: "reset"
}
