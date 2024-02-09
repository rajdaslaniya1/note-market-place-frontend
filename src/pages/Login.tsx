import React from "react";

import LoginLayout from "component/layout/LoginLayout";
import InputComponent from "component/InputComponent";
import PasswordInputComponent from "component/PasswordInputComponent";

import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { loginApiCall } from "service/login-services";

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is not valid"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[!@#$%^&*()_+{}[\]|;:,.<>?])(?=.*\d)(?!\s).{6,24}$/,
      "Password must contain at least one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  isRemember: Yup.boolean(),
});

const Login = () => {
  const submitLoginData = async (values: {
    email: string;
    password: string;
    isRemember: boolean;
  }) => {
    const data = await loginApiCall({
      email: values.email,
      password: values.password,
    });
    console.log(data);
    if (data.success) {
      toast.success("User login successfully");
    }
  };

  return (
    <LoginLayout>
      <Formik
        initialValues={{ email: "", password: "", isRemember: false }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          submitLoginData(values);
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <h2 className="form-layout-heading">Login</h2>
            <p className="form-layout-sub-heading">
              Enter email address and password for login
            </p>
            <div className="mb-3">
              <InputComponent
                label="Email"
                name="email"
                id="EmailId"
                placeHolder="Enter email address"
                type="email"
                onChange={handleChange}
                errors={errors.email}
                value={values.email}
                required
              />
            </div>
            <div className="mb-3">
              <PasswordInputComponent
                label="Password"
                name="password"
                id="password"
                placeHolder="Enter your password"
                onChange={handleChange}
                errors={errors.password}
                value={values.password}
                required
                isLoginPage
              />
            </div>

            <div className="form-group form-check" id="checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                name="isRemember"
                checked={values.isRemember}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary1 btn-full-width">
              Login
            </button>
            <br />
            <p className="form-layout-last-heading">
              Don't have an account?<a href="signup.html">Sign Up</a>
            </p>
          </form>
        )}
      </Formik>
    </LoginLayout>
  );
};

export default Login;
