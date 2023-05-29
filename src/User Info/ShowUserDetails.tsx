import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const ShowUserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let user = {
    UID: "e001",
    name: "Tom",
    CompanyID: "007",
    CompanyName: "Infosys",
    UserType: "Main",
  };
  return (
    <div>
      <h1>User Details Page {id}</h1>
      <div>
        Code : {user.UID}
        <br></br>
        Name : {user.name}
        <br></br>
        permission : {user.CompanyID}
        <br></br>
        anualSalary : {user.CompanyName}
        <br></br>
        dateofBirth : {user.UserType}
        <br></br>
      </div>
      <button onClick={() => navigate("/userdetails/")}>All Users</button>
    </div>
  );
};

export default ShowUserDetails;
