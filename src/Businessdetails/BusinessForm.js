import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BusinessForm = (props) => {
  const [credential, setCredential] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    emailid: "",
    number: null, // Use props.data for initial value of number
    DOB: "",
    businessname: "",
    businessaddress: "",
    businessDescription: "",
    pincode: "",
    businessNumber: "",
  });
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  useEffect(() => {
    setCredential({ ...credential, number: props.data });
  }, [props.data]); //for bydefold datapass

  const clickhere = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth//businessdetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        alert("Failed to submit form. Please fill in all fields correctly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="p-3">
        <form onSubmit={clickhere}>
          <div className="row mx-2">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter First name"
                name="firstname"
                value={credential.firstname}
                onChange={onChange}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Middle name"
                name="middlename"
                value={credential.middlename}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last name"
                name="lastname"
                value={credential.lastname}
                onChange={onChange}
              />
            </div>
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter EmailId"
                name="emailid"
                value={credential.emailid}
                onChange={onChange}
              />
            </div>
            {/* <div className="col">
              <input
                type="hidden"
                className="form-control"
                placeholder="Enter Mobile Number"
                name="number"
                value={credential.number} // Use credential.number for input value
                onChange={onChange}
              />
            </div> */}
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-6">
              <input
                type="date"
                className="form-control"
                placeholder="Enter date of birth"
                name="DOB"
                value={credential.DOB}
                onChange={onChange}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter business name"
                name="businessname"
                value={credential.businessname}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter business address"
                name="businessaddress"
                value={credential.businessaddress}
                onChange={onChange}
              />
            </div>
            <div className="col-6">
              <textarea
                className="form-control"
                placeholder="Enter business Description"
                name="businessDescription"
                rows="3"
                value={credential.businessDescription}
                onChange={onChange}
              ></textarea>
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter pincode"
                name="pincode"
                value={credential.pincode}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter business mobile Number"
                name="businessNumber"
                value={credential.businessNumber}
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessForm;
