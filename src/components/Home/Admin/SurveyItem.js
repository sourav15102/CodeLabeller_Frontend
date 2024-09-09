import React from "react";
import "../Admin/SurveyItem.css";

const SurveyItem = ({ survey }) => {
  return (
    <>
      <h3>
        Survey Name: <span className="survey-name">{survey.surveyName}</span>
      </h3>
      <p>
        Survey Language:{" "}
        <span className="survey-language">{survey.surveyLanguage}</span>
      </p>
    </>
  );
};

export default SurveyItem;
