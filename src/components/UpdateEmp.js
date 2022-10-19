import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmp = () => {
  const { id } = useParams();
  const [empForm, setEmpForm] = useState({
    empId: "",
    empName: "",
    empSal: 0,
    isMarried: false,
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    e.preventDefault();
    setEmpForm({ ...empForm, [e.target.name]: e.target.value });
    console.log(empForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://61b3b46eaf5ff70017ca2059.mockapi.io/users/" + id, empForm)
      .then((response) => {
        console.log(response.data);
        navigate("/showAll");
      })
      .catch((err) => console.log("error is :" + err));
  };

  useEffect(() => {
    axios
      .get("https://61b3b46eaf5ff70017ca2059.mockapi.io/users/" + id)
      .then((response) => {
        setEmpForm(response.data);
        console.log(response);
      })
      .catch((err) => console.log("err is : " + err));
  }, [id]);

  const onClose = () => {
    navigate("/showAll");
  };
  return (
    <div>
      <form>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Employee Form
              </h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Emp Id"
                className="form-control my-2"
                name="empId"
                value={empForm.empId}
                readOnly
                onChange={(e) => handleOnChange(e)}
              />
              <input
                type="text"
                placeholder="Emp Name"
                className="form-control my-2"
                name="empName"
                value={empForm.empName}
                onChange={(e) => handleOnChange(e)}
              />
              <input
                type="text"
                placeholder="Emp Salary"
                className="form-control my-2"
                name="empSal"
                value={empForm.empSal}
                onChange={(e) => handleOnChange(e)}
              />

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="isMarried"
                  value={empForm.isMarried}
                  onChange={(e) => handleOnChange(e)}
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
                onClick={(e) => handleSubmit(e)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmp;
