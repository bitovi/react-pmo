import type { RouteError } from "./interfaces"

import { useRouteError } from "react-router-dom"

const NotFound: React.FC = () => {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  )
}

export default NotFound
