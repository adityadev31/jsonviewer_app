import './navbar.css'
import reactLogo from "../../assets/reactLogo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <img className='navbar_brand_logo' src={reactLogo} alt="Logo" width={30} height={30}/>
        <Link className="navbar-brand ms-2" to={"/"}>JsonViewerApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Viewer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/2">Input</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar