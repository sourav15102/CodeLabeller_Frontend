import React from "react";
const SurveyItem = ({ survey }) => {
  return (
    <div>
      <div>
        <h3>
          Survey Name: <span className="survey-name">{survey.surveyName}</span>
        </h3>
        <p>
          Survey Language:
          <span className="survey-language">{survey.surveyLanguage}</span>
        </p>
      </div>
    </div>
  );
};

export default SurveyItem;
