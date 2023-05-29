import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const ClientDetails = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/showclientdetails/e001");
  };
  let client = [
    {
      code: "e001",
      name: "Tom",
      permission: "Edit",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      permission: "View",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      permission: "All",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "e001",
      name: "Kaveri",
      permission: "Read",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ClientID</th>
            <th>Name</th>
            <th>Permission</th>
            <th>Type</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {client.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.permission}</td>
              <td>{item.anualSalary}</td>
              <td>{item.dateofBirth}</td>
              <td>
                <button onClick={goDetails}>All Clients</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientDetails;
