import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axios from "axios";
const History = () => {
  const { id } = useParams();
  const [history, sethistory] = useState([]);
  const data = history.map((data,key) => {
    if (data.userid === id) {
      return (
        <div className="division" key={key}>
          {data.details.map((value,key) => {
            return (
              <div className="content-div" key={key}>
                <h5>
                  {" "}
                  <h2>Sectors:</h2> {value.sector}
                </h5>
                <h5>
                  {" "}
                  <h2>Problems:</h2> {value.problems}
                </h5>
                <h5>
                  {" "}
                  <h2>Ideas:</h2>
                  {value.ideas}
                </h5>
              </div>
            );
          })}
        </div>
      );
    }
  });
  console.log(data);
  console.log();
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8080/api/user/userhis`)
        .then((response) => {
          sethistory(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <div className="mainhistory">
        <div className="content-heading">
          <h1>Your shared Problems and ideas</h1>
        </div>
        {data}
      </div>
    </>
  );
};

export default History;
