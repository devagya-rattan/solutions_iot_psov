import React, { useState, useEffect } from "react";
import axios from "axios";
const About = () => {
  const [globe, setGlobe] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8080/api/user/userhis`)
        .then((response) => {
          setGlobe(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="alluserdetails">
        <div className="allheading">
          <h1>Globe</h1>
        </div>
        <div className="globecontent">
          {globe.map((data, key) => {
            return (
              <div className="globaldetails" key={key}>
                <h3>{data.name}</h3>
                <div className="globe">
                  {data.details.map((values, key) => {
                    return (
                      <div className="values" key={key}>
                        <h5>Sector-{values.sector}</h5>
                        <h5>Problems-{values.problems}</h5>
                        <h5>Ideas-{values.ideas}</h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
