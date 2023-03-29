import React from "react";

const titleStyle = {
  width: "fit-content",
  fontVariant: "small-caps",
  position: "relative",
  display: "grid",
  placeItems: "center",
};

const Title = ({ title }) => {
  return <div style={titleStyle}>
    <h4>{title || "Titolo"}</h4>
    <div className="underline"></div>
  </div>;
};



export default Title;
