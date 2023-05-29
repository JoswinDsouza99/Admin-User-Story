import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlert] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setAlert("Please enter a username and password.");
      return;
    }

    if (username === "admin" && password === "admin") {
      localStorage.setItem("uname", username);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      setAlert("Login failed. Please try again.");
    }
  };

  const handleCloseAlert = () => {
    setAlert("");
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      {alertMessage && (
        <div className="alert alert-danger alert-dismissible">
          {alertMessage}
          <button type="button" className="close" onClick={handleCloseAlert}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
