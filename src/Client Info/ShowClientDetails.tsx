import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const ShowClientDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let client = {
    code: "e001",
    name: "Tom",
    permission: "Read",
    anualSalary: 5500,
    dateofBirth: "25/6/1988",
  };
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
