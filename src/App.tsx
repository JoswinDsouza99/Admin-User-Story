import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ClientDetails from "./Client Info/ClientDetails";
import ShowClientDetails from "./Client Info/ShowClientDetails";
import AddClient from "./Client Info/AddClient";
import UserDetails from "./User Info/UserDetails";
import ShowUserDetails from "./User Info/ShowUserDetails";
import AddUser from "./User Info/AddUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Dashboard
                headerMessage="Hello welcome to my website"
                footerMessage="Copyright reserved to Joswin as of 2023"
              />
            }
          />
          <Route path="clientdetails" element={<ClientDetails />} />
          <Route path="showclientdetails/:id" element={<ShowClientDetails />} />
          <Route path="addclient" element={<AddClient />} />

          <Route path="userdetails" element={<UserDetails />} />
          <Route path="showuserdetails/:id" element={<ShowUserDetails />} />
          <Route path="adduser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
