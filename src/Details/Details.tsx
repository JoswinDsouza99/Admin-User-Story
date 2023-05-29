import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let client = {
    code: "e001",
    name: "Tom",
    gender: "Male",
    anualSalary: 5500,
    dateofBirth: "25/6/1988",
  };
  return (
    <div>
      <h1>Employee Details Page {id}</h1>
      <div>
        Code : {client.code}
        <br></br>
        Name : {client.name}
        <br></br>
        permission : {client.gender}
        <br></br>
        anualSalary : {client.anualSalary}
        <br></br>
        dateofBirth : {client.dateofBirth}
        <br></br>
      </div>
      <button onClick={() => navigate("/clientdetails/")}>Details</button>
    </div>
  );
};

export default Details;
