import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const UserDetails = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/showuserdetails/e001");
  };
  let users = [
    {
      UID: "e001",
      name: "Tom",
      CompanyID: "007",
      CompanyName: "Infosys",
      UserType: "Main",
    },
    {
      UID: "e002",
      name: "Jude",
      CompanyID: "007",
      CompanyName: "Trivium",
      UserType: "Main",
    },
    {
      UID: "e003",
      name: "Rudy",
      CompanyID: "007",
      CompanyName: "TCS",
      UserType: "Main",
    },
    {
      UID: "e004",
      name: "Bond",
      CompanyID: "007",
      CompanyName: "Wipro",
      UserType: "Main",
    },
  ];

  return (
    <>
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
          {users.map((item, index) => (
            <tr key={index}>
              <td>{item.UID}</td>
              <td>{item.name}</td>
              <td>{item.CompanyID}</td>
              <td>{item.CompanyName}</td>
              <td>{item.UserType}</td>
              <td>
                <button onClick={goDetails}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/adduser/")}> Add User</button>
    </>
  );
};

export default UserDetails;
