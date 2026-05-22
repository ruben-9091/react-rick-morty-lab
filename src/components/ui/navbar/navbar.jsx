import { Link } from 'react-router';
import logo from '../../../assets/images/icons/logo.png';

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand fw-light" to="/">
          <img src={logo} alt="Rick&Morty" width="25" height="25" className="d-inline-block align-text-center" /> Rick & Morty
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;