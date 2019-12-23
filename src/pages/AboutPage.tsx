import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Info</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad esse ex
        explicabo harum minus natus nemo rem repudiandae saepe?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        К списку
      </button>
    </div>
  );
};
