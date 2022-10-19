import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmp = () => {
  const [empForm, setEmpForm] = useState({
    empId: "",
    empName: "",
    empSal: 0,
    isMarried: false,
  });

  const navigate = useNavigate();

  const saveEmpInfoToJsonServer = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://61b3b46eaf5ff70017ca2059.mockapi.io/users", empForm)
        .then((response) => {
          setEmpForm(response.data);
          console.log(response);
          navigate("/showAll");
          window.location.reload();
        });
    } catch (err) {
      console.log("err is : " + err);
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setEmpForm({ ...empForm, [e.target.name]: e.target.value });
    console.log("test");
  };
  const onClose = () => {
    navigate("/showAll");
  };

  const verticalCenter = {
    margin: "0",
    position: "absolute",
    top: " 20%",
    left: "40%",
  };
  return (
    <div>
      <div>
        <div className="row my-2 mx-2" style={verticalCenter}>
          <div className="col-md-2 float-center">
            <input
              type="button"
              value="Add New Employee "
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Employee Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Emp Id"
                className="form-control my-2"
                name="empId"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Emp Name"
                className="form-control my-2"
                name="empName"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Emp Salary"
                className="form-control my-2"
                name="empSal"
                onChange={handleOnChange}
              />

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="isMarried"
                  value={empForm.isMarried ? false : true}
                  onChange={handleOnChange}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Is Married?
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={saveEmpInfoToJsonServer}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
