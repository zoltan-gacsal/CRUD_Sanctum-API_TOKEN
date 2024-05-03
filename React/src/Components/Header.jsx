import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid flex-column">
        <Link className="navbar-brand" to='#'>Laravel-React Crud System</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item m-3">
              <Link className="nav-link active" aria-current="page" to='/'> <i className="bi bi-house" style={{ fontSize: "22px" }}></i> Home</Link>
            </li>
            <li className="nav-item m-3">
              <Link className="nav-link" to='/register'> <i className="bi bi-person-add" style={{ fontSize: "22px" }}></i> Register</Link>
            </li>
            <li className="nav-item m-3">
              <Link className="nav-link" to='/login'> <i className="bi bi-door-open" style={{ fontSize: "22px" }}></i> Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
