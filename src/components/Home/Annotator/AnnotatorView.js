import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SurveyItem from "./AnSurveyItem";
import annotator from "./AnnotatorModel";
import "../Annotator/AnnotatorView.css";
import AnnotatorHeader from "./AnnotatorHeader";
import { Button } from "react-bootstrap";

const AnnotatorView = () => {
  const changePage = useNavigate();
  const [surveys, setSurveys] = useState();

  const annotator_name = annotator.name;

  useEffect(() => {
    axios
      .get("/annotator/" + annotator_name + "/survey/all/", {
        headers: {
          Authorization: window.localStorage.getItem("jwtToken"),
        },
      })
      .then((response) => {
        setSurveys(response.data);
      })
      .then(() => {
        changePage("/annotator/home/viewSurveys");
      })
      .catch((error) => {
        console.error("Error loading surveys:", error);
      });
  }, [changePage, annotator_name]);

  const onSurveyStart = (surveyID) => {
    window.localStorage.setItem("surveyID", surveyID);
    window.localStorage.setItem("annotatorName", annotator_name);
    changePage(`/annotator/home/viewSurvey/startSurvey/${surveyID}`);
  };

  if (!surveys) {
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

  return (
    <div>
      <AnnotatorHeader title="List of Surveys" />
      <div className="surveys-container">
        <ul className="surveys-list">
          {surveys.map((survey) => (
            <li key={survey.surveyID} className="survey-item">
              <div className="item">
                <div className="item_name">
                  <SurveyItem survey={survey} />
                </div>
                <div className="item_button1">
                  <Button
                    className="button1"
                    onClick={() => onSurveyStart(survey.surveyID)}
                  >
                    Start Survey
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnnotatorView;
