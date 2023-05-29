import React from "react";

const AddClient = () => {
  return (
    <div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          CompanyName
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
          />
        </div>
      </div>
      <div className="row">
        <label
          htmlFor="colFormLabelLg"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          UserType
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
          />
        </div>
      </div>
      <button>Save</button>
    </div>
  );
};

export default AddClient;
