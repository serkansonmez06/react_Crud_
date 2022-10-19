import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowAll = () => {
  const [empsData, setEmpsData] = useState([]);
  const navigate = useNavigate();

  const updateEmpInfoToMockAPI = (id) => {
    console.log(id);

    navigate("/update/" + id);
  };

  //axios will not delete item if you didnt post it.
  // thats why i used fetch in here
  const handleDelete = (id) => {
    fetch("https://61b3b46eaf5ff70017ca2059.mockapi.io/users/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        const remainingData = empsData.filter((i) => i.id !== id);

        setEmpsData(remainingData);

        console.log(remainingData);
      })
      .catch((err) => console.log("error " + err));
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://61b3b46eaf5ff70017ca2059.mockapi.io/users")
        .then((response) => {
          setEmpsData(response.data);
          console.log(response.data);
        });
    };
    fetchData();
  }, [setEmpsData]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Emp ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Emp Salary</th>
            <th scope="col">Is married</th>
            <th scope="col">UPDATE</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {empsData.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.empId}</td>
              <td>{item.empName}</td>
              <td>{item.empSal}</td>
              <td>{item.isMarried ? "Married" : "Not Married"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => updateEmpInfoToMockAPI(item.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAll;
