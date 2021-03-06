import React, { Component } from "react";

const style = {
  container: {
    backgroundColor: "#00778D",
    padding: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  text: {
    color: "#fff",
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontSize: 10,
    fontWeight: "normal"
  }
};

export const LabelIncomplete = () => {
  return (
    <div style={style.container}>
      <h4 style={style.text}>{"Incomplete"}</h4>
    </div>
  );
};

export default LabelIncomplete;
