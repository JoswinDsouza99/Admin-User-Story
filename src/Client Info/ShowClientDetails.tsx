import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Client } from "./Client";
const ShowClientDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [client, setClient] = useState<Client>();
  let [errors, setErrors] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5192/api/Admin/getClientListbyID/" + id)
      .then((res) => {
        console.log(res.data);
        setClient(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);
  if (!client) return <h1>No such Clients</h1>;
  return (
    <div>
      <h1>Client Details Page {id}</h1>
      <div>
        Code : {client.code}
        <br></br>
        Name : {client.name}
        <br></br>
        permission : {client.permission}
        <br></br>
        anualSalary : {client.anualSalary}
        <br></br>
        dateofBirth : {client.dateofBirth}
        <br></br>
      </div>
      <button onClick={() => navigate("/clientdetails/")}>All Clients</button>
    </div>
  );
};

export default ShowClientDetails;
