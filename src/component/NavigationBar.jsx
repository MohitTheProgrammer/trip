import "../styles/navigationBar.css"

const NavBar = () => {
    return (
      <header>
        <nav>
          <div className="nav-logo">
            <h1>Trip to</h1>
          </div>
          <ul className="nav-list">
            <li className="nav-items">
              <a href="">Home</a>
            </li>
            <li className="nav-items">
              <a href="">About</a>
            </li>
            <li className="nav-items">
              <a href="">Packages</a>
            </li>
            <li className="nav-items">
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="nav-user-profile">profile</div>
        </nav>
      </header>
    );
  };
  
  export default NavBar;