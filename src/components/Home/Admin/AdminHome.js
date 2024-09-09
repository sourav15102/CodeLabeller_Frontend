import React from "react";
import "./AdminHome.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Security/AuthContext";
import Header from "./AdminHeader";

const AdminHome = () => {
  const changePage = useNavigate();
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleClickButton1 = () => {
    navigate("/admin/home/createSurvey");
  };

  const handleClickButton2 = () => {
    navigate("/admin/home/viewSurveys");
  };

  return (
    <div>
      <div>
        <Header title="Admin Home Page" />
      </div>
      <div className="container">
        <div className="centered-element">
          <button className="button button-1" onClick={handleClickButton1}>
            Create Survey
          </button>
          <button className="button button-2" onClick={handleClickButton2}>
            View Surveys
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
