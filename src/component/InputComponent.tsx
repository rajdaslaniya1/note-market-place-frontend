import React from "react";
import styled from "styled-components";

interface IInputComponentProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required: boolean;
  errors: any;
  value: string;
}

const InputComponent: React.FC<IInputComponentProps> = ({
  label,
  type,
  id,
  name,
  placeHolder,
  onChange,
  required = false,
  errors,
  value,
}) => {
  return (
    <Div className="form-group" id={id}>
      <label className="form-label">{label}</label>
      <div>
        <input
          type={type}
          className="form-control"
          name={name}
          id={id}
          value={value}
          placeholder={placeHolder}
          required={required}
          onChange={onChange}
        />
      </div>
      {errors && <div className="invalid-text">{errors}</div>}
    </Div>
  );
};

export default InputComponent;

const Div = styled("div")({
  fontFamily: '"Open Sans", sans-serif',
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "var(--light-black)",
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
    outline: "0 !important",
    boxShadow: "none !important",
    border: "1px solid var(--main-color) !important",
  },
});
