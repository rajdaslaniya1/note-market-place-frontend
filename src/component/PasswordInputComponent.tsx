import React, { useState } from "react";
import styled from "styled-components";

import { eyeImage } from "assets/images";

interface IPasswordInputComponentProps {
  label: string;
  id: string;
  name: string;
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  errors: any;
  isLoginPage?: boolean;
  value: string;
}

const PasswordInputComponent: React.FC<IPasswordInputComponentProps> = ({
  label,
  id,
  name,
  placeHolder,
  onChange,
  required = false,
  errors,
  isLoginPage = false,
  value,
}) => {
  const [showEye, setShowEye] = useState(false);
  return (
    <Div className="form-group" id={id}>
      <label className="form-label">{label}</label>
      {isLoginPage && (
        <label className="forgot">
          <a href="forgot.html">Forgot Password?</a>
        </label>
      )}
      <div className="text-container">
        <input
          id={id}
          type={showEye ? "text" : "password"}
          className="form-control"
          name={name}
          onChange={onChange}
          placeholder={placeHolder}
          required={required}
          value={value}
        />
        <span className="field-icon">
          <img src={eyeImage} alt="eye" onClick={() => setShowEye(!showEye)} />
        </span>
      </div>
      {errors && <div className="invalid-text">{errors}</div>}
    </Div>
  );
};

export default PasswordInputComponent;

const Div = styled("div")({
  fontFamily: '"Open Sans", sans-serif',
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "var(--light-black)",
  "& .forgot": { float: "right" },
  "& .form-control": {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "var(--black-color)",
    border: "1px solid var(--main-color)",
    width: "100%",
    height: "50px",
    outline: "none",
  },
  "& .form-control:focus": {
    outline: "0",
    boxShadow: "none",
    border: "1px solid var(--main-color)",
  },
  "& .text-container": {
    position: "relative",
  },
  "& .field-icon": {
    position: "absolute",
    top: "0",
    right: "10px",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    "& img": {
      cursor: "pointer",
    },
  },
});
