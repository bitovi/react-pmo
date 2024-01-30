import type { RouteError } from "./interfaces"

import { Link, useRouteError } from "react-router-dom"

const NotFound: React.FC = () => {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div className="errorpage" style={{ margin: "auto" }}>
      <h1>Error</h1>

      <p>{error.statusText}</p>

      <p>
        <Link className="btn" to="/" role="button">
          Go Home
        </Link>
      </p>
    </div>
  )
}

export default NotFound
