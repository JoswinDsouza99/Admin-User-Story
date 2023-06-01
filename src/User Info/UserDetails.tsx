import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Users } from "./User";

const UserDetails = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/showuserdetails/e001");
  };
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  const showDetails = (id: number) => {
    navigate("/showuserdetails/" + id);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5192/api/Admin/getUserList") //success  of APi Call
      .then((res) => setUsers(res.data)) //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const showUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .get("http://localhost:5192/api/Admin/getuserListbyID/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orginalState);
      });
  };
  const deleteUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .get("http://localhost:5192/api/Admin/deleteUser/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orginalState);
      });
  };

  return (
    <>
      {error && <p>{error}</p>}     
      {isLoading && <div className="spiner-border">Loading....</div>}   
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>UserID</th>
            <th>Name</th>
            <th>Permission</th>
            <th>Type</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {users.map((index) => (
            <tr key={index.id}>
              <td>{index.id}</td>
              <td>{index.username}</td>
              <td>{index.companyID}</td>
              <td>{index.companyName}</td>
              <td>{index.usertype}</td>
              <td>
                <button onClick={() => showDetails(index.id)}>Details</button>
              </td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/adduser/")}>Add User</button>   
    </>
  );
};

export default UserDetails;
