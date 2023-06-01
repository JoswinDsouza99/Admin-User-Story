import React, { useState } from "react";
import { Users } from "./User";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface Props {
  id: number;
  username: string;
  companyID: string;
  companyName: string;
  usertype: string;
}

const AddUser = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<Props>({
    id: 0,
    username: "",
    companyID: "",
    companyName: "",
    usertype: "",
  });
  const [error, setErrors] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:5192/api/Admin/addUser")
      .then((response: AxiosResponse<number>) => {
        navigate("/usersList");
      })
      .catch((error) => setErrors(error.message))
      .finally();
  };

  const resetForm = () => {
    setUserData({
      id: 0,
      username: "",
      companyID: "",
      companyName: "",
      usertype: "",
    });
  };

  return (
    <div>
      <div className="row mb-4">
        <h1>Add User</h1>
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          UID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userData.id}
            onChange={(e) =>
              setUserData({ ...userData, id: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <div className="row mb-4">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-4">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Company Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userData.companyID}
            onChange={(e) =>
              setUserData({ ...userData, companyID: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mb-4">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          User Type
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userData.companyName}
            onChange={(e) =>
              setUserData({ ...userData, companyName: e.target.value })
            }
          />
        </div>
      </div>
      <button type="button" className="btn btn-primary m-2" onClick={submit}>
        Save
      </button>
    </div>
  );
};

export default AddUser;
