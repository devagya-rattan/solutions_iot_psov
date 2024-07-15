import React, { useState, useEffect } from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
const UserDetails = () => {
  const [userActive, setUserActive] = useState(false);
  const [warning, setWarning] = useState(false);
  const toggleActive = () => {
    setUserActive(true);
    if (userActive === true) setUserActive(false);
  };
  const closeActive = () => {
    setUserActive(false);
  };
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8080/api/user/getuser/${id}`)
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const deleteAccount = () => {
    setWarning(true);
    // if (warning === true) setWarning(false);
  };
  const finalDeletion = () => {
    alert("Are you sure??");
    try {
      axios
        .delete(`http://localhost:8080/api/user/delete/${id}`)
        .then((response) => {
          setUserDetails(response.data);
          toast.success("Successful Deletion!! ", {
            autoClose: 2000, // Time in milliseconds (3 seconds)
          });
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="user-details">
        <div className={warning ? "errormessage-active" : "errormessage"}>
          <div className="errordiv">
            <p>
              Are you sure you want ro delete your account??. Once deleted wont
              be recovered in future. All data will be lost!!
            </p>
            <div className="errorbuttons">
              <button
                className="error-buttons"
                onClick={() => setWarning(false)}
              >
                Cancel
              </button>
              <button className="error-buttons" onClick={finalDeletion}>
                Delete Account
              </button>
            </div>
          </div>
        </div>
        <div className="userprofile">
          <h5>{userDetails.name}</h5>
          <h5>
            <LuUserCircle2 />
          </h5>
          <h5>
            <IoIosArrowForward onClick={toggleActive} />
          </h5>
        </div>
        <div className={userActive ? "active" : "flexdiv"}>
          <div>
            <div className="userheading">
              <h3>User Details</h3>
              <h5>
                <RiCloseLargeLine onClick={closeActive} />
              </h5>
            </div>
            <p>Name:{userDetails.name}</p>
            <p>Email:{userDetails.email}</p>
            <button className="button" onClick={deleteAccount}>
              Delete Account
            </button>
          </div>
          <div className="userhistory">
            <Link to={`/history/${id}`} className="hisheading">
              <h3 >Your History</h3>
            </Link>
            <h5>
              <IoIosArrowForward />
            </h5>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserDetails;
