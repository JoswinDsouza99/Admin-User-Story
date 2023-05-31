import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Users {
  id: number;
  username: string;
  companyID: string;
  companyName: string;
  usertype: string;
}

const UserDetails = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/showuserdetails/e001");
  };
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5192/admin") //success  of APi Call
      .then((res) => setUsers(res.data)) //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const deleteUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios.delete("http://localhost:5192/admin" + user.id).catch((err) => {
      setErrors(err.message);
      setUsers(orginalState);
    });
  };
  const addUser = () => {
    const newUser = {
      id: 1,
      username: "Joswin",
      companyID: "Triv007",
      companyName: "KPMG",
      usertype: "User",
    };
    setUsers([...users, newUser]);
    axios
      .post("http://localhost:5192/admin", newUser)
      .then((res) => setUsers([...users, res.data]));
  };

  // let users = [
  //   {
  //     UID: "e001",
  //     name: "Tom",
  //     CompanyID: "007",
  //     CompanyName: "Infosys",
  //     UserType: "Main",
  //   },
  //   {
  //     UID: "e002",
  //     name: "Jude",
  //     CompanyID: "007",
  //     CompanyName: "Trivium",
  //     UserType: "Main",
  //   },
  //   {
  //     UID: "e003",
  //     name: "Rudy",
  //     CompanyID: "007",
  //     CompanyName: "TCS",
  //     UserType: "Main",
  //   },
  //   {
  //     UID: "e004",
  //     name: "Bond",
  //     CompanyID: "007",
  //     CompanyName: "Wipro",
  //     UserType: "Main",
  //   },
  // ];

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
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addUser}>Add User</button>   
    </>
  );
};

export default UserDetails;
