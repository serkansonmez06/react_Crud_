import React from "react";

const FooterComponent = () => {
  const styleFooter = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100% ",
    backgroundColor: "#2a5235",
    color: "white",
    textAlign: "center",
    zIndex: 5,
  };
  return (
    <div>
      <div style={styleFooter}>
        <p> Web page designed using React Js | {new Date().getFullYear()}</p>
        <p> by Serkan Sonmez</p>
      </div>
    </div>
  );
};

export default FooterComponent;
