import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="homepage" style={{ margin: "auto" }}>
      <img
        src="https://www.place-my-order.com/node_modules/place-my-order-assets/images/homepage-hero.jpg"
        alt="Restaurant table with glasses."
        width="250"
        height="380"
      />

      <h1>Ordering food has never been easier</h1>

      <p>
        We make it easier than ever to order gourmet food from your favorite
        local restaurants.
      </p>

      <p>
        <Link className="btn" to="/restaurants" role="button">
          Choose a Restaurant
        </Link>
      </p>
    </div>
  )
}

export default Home
