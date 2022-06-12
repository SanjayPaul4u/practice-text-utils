import React from "react";

export default function Alert(props) {
  const capitalMsg = (string) => {
    const lower = string.toLowerCase();
    const mainString = lower.charAt(0).toUpperCase() + lower.slice(1);
    return mainString;
  };
  return (
    <div style={{height: '50px'}}>
      {props.myAlert && (
        <div
          className={`alert alert-${props.myAlert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalMsg(props.myAlert.type)}: </strong>{" "}
          {props.myAlert.msg}
        </div>
      )}
    </div>
  );
}
