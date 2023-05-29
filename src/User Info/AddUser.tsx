import React, { useState } from "react";

interface User {
  UID: string;
  name: string;
  CompanyID: string;
  CompanyName: string;
  UserType: string;
}

const AddUser = () => {
  const [UID, setCode] = useState("");
  const [name, setName] = useState("");
  const [CompanyID, setCompanyID] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [UserType, setUserType] = useState("");

  const submit = () => {
    const user: User = {
      UID: UID,
      name: name,
      CompanyID: CompanyID,
      CompanyName: CompanyName,
      UserType: UserType,
    };
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
            onChange={(event) => setCode(event.target.value)}
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
            onChange={(event) => setCode(event.target.value)}
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
            onChange={(event) => setCode(event.target.value)}
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
            onChange={(event) => setCode(event.target.value)}
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
