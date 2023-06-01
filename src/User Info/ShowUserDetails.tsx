import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Users } from "./User";
const ShowUserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [user, setUser] = useState<Users>();
  let [errors, setErrors] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5192/api/Admin/getuserListbyID/" + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);
  if (!user) return <h1>No such employee</h1>;
  return (
    <div>
      <h1>User Details Page {id}</h1>
      <div>
        Code : {user.id}
        <br></br>
        Name : {user.username}
        <br></br>
        permission : {user.companyID}
        <br></br>
        anualSalary : {user.companyName}
        <br></br>
        dateofBirth : {user.usertype}
        <br></br>
      </div>
      <button onClick={() => navigate("/userdetails/")}>All Users</button>
    </div>
  );
};

export default ShowUserDetails;
