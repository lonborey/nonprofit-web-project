import { Link } from "react-router-dom";
import "../assets/css/style.css";

const HeaderComponent = () => {
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1
            className="logo me-auto"
            style={{ fontSize: 25, textTransform: "capitalize" }}
          >
            <Link to="/">village support group</Link>
          </h1>

          {/* <Link to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></Link> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#services">
                  Partner
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="#portfolio">
                  Project
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="#team">
                  Staff
                </Link>
              </li>
              {/*               
              <li className="dropdown">
                <Link to="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#">Drop Down 1</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Deep Drop Down 1</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 2</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 3</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 4</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Drop Down 2</Link>
                  </li>
                  <li>
                    <Link to="#">Drop Down 3</Link>
                  </li>
                  <li>
                    <Link to="#">Drop Down 4</Link>
                  </li>
                </ul>
              </li> */}

              <li>
                <Link className="nav-link scrollto" to="#contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="getstarted scrollto" to="#about">
                  Get Started
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
