import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content nav-bar-large-container">
        <img
          className="website-logo"
          src="/img/KitchenLogo.jpg"
          alt="website logo"
        />
        <h5 className="website-name">Tasty Kitchens</h5>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link-home">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
