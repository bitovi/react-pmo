export type PromiseState<Data> =
  | SuccessState<Data>
  | ErrorState
  | PendingState
  | InitialState

interface SuccessState<Data> {
  pending: false
  data: Data
  error?: undefined
}

interface ErrorState {
  pending: false
  data?: undefined
  error: string
}

interface PendingState {
  pending: true
  data?: undefined
  error?: undefined
}

interface InitialState {
  pending: false
  data?: undefined
  error?: undefined
}
