import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface HeaderProps {
  headerMessage: string;
  footerMessage: string;
}

const Dashboard = ({ headerMessage, footerMessage }: HeaderProps) => {
  const navigate = useNavigate();
  const goToClient = () => {
    navigate("/clientdetails/");
  };

  const goToUser = () => {
    navigate("/userdetails/");
  };

  const handleLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <header className="bg-dark text-white">
          <div className="container py-3">
            <h1>{headerMessage}</h1>
            <h4>Welcome to your {localStorage.getItem("uname")}</h4>
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 bg-light">
              <h3>Menu</h3>
              <ul>
                <li>
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#" onClick={goToClient}>
                    Client
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#" onClick={goToUser}>
                    User
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
                <li>
                  <a className="nav-link" onClick={handleLogout}>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="container py-3">
                <h2>Content Area</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vestibulum sapien ac tincidunt tincidunt.{" "}
                </p>
              </div>
            </div>
          </div>
          <footer className="bg-dark text-white">
            <div className="container py-3">
              <h3>{footerMessage}</h3>
            </div>
          </footer>
        </div>
      </div>
    );
  }
};

export default Dashboard;
