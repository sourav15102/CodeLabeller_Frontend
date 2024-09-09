import React, { useState, useEffect } from "react";
import Highlight from "../Highlight/Highlight";
import axios from "axios";
import "../Admin/SurveyView.css";
import { useNavigate } from "react-router-dom";
const SurveyComponent = () => {
  const changePage = useNavigate();
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "/admin/" +
          window.localStorage.getItem("AdminUsername") +
          "/survey/" +
          window.localStorage.getItem("surveyID") +
          "/",
        {
          headers: {
            Authorization: window.localStorage.getItem("jwtToken"),
          },
        }
      );
      setSurveyData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  if (!surveyData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  function getSelection() {
    let txt = "";

    if (window.getSelection) {
      txt = window.getSelection();
      console.log(txt);
    }
  }
  const handleBack = () => {
    changePage("/admin/home/viewSurveys ");
  };

  return (
    <div>
      <div className="header_surveyView">
        <button className="back_button" onClick={() => handleBack()}>
          Back
        </button>
        <h3>
          Survey Name: <span class="survey-name">{surveyData.surveyName}</span>
          <h6 style={{ color: "blue" }}>
            Language: {surveyData.surveyLanguage}
          </h6>
        </h3>
      </div>
      <div className="view_main">
        <div className="view_left">
          <ul>
            {surveyData.snippetResponseSet.map((snippet) => (
              <li key={snippet.snippetID}>
                <Highlight language="java" code={atob(snippet.snippetText)} />
                <h4 onMouseUp={() => getSelection()}></h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="view_right">
          <div className="view_right">
            <ul>
              <h2 style={{ color: "rgb(0,0, 200)" }}>Annotations List</h2>
              {surveyData.annotationResponseSet.map((annotation) => (
                <li className="li_annotations" key={annotation.annotationID}>
                  {annotation.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyComponent;
