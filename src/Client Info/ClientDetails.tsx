import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Client } from "./Client";
const ClientDetails = () => {
  const navigate = useNavigate();
  const [client, setUsers] = useState<Client[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  const showDetails = (id: number) => {
    navigate("/showclientdetails/" + id);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5192/api/Admin/getClientList") //success  of APi Call
      .then((res) => setUsers(res.data)) //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteClient = (id: number) => {
    axios
      .get("http://localhost:5192/api/Admin/deleteClient/" + id)
      .catch((err) => {
        setErrors(err.message);
      });
  };
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
                <button onClick={() => showDetails(item.code)}>Details</button>
              </td>
              <td>
                <button onClick={() => deleteClient(item.code)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientDetails;
