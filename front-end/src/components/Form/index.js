import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import Input from "../Input";
import { axiosAuth } from "../../apiRequests";
import * as Yup from "yup";
import "./index.scss";

const forms = {
  login: {
    fields: { email: "", password: "" },
  },
  register: {
    fields: { username: "", email: "", password: "" },
    validation: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters long at most")
        .matches(
          RegExp(/^[ A-Za-z0-9_.*#&!-@]*$/),
          "Only letters, numbers and special characters @, &,!,.,-,*,# allowed"
        )
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be between 8 and 20 characters long")
        .max(20, "Must be between 8 and 20 characters long")
        .matches(
          RegExp(/^[ A-Za-z0-9_.*#&!-$%@]*$/),
          "Only letters, numbers and special characters @, &, !, ., -, *, #, $, %, _ allowed"
        )
        .required("Required"),
    }),
  },
};

const Form = ({ page }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { fields } = forms[page];
  const fieldsArray = Object.keys(fields);

  const formik = useFormik({
    initialValues: fields,
    onSubmit: async (values) => {
      try {
        const results = await axiosAuth.post(`/${page}`, values);
        if (results.status === 201 || results.status === 200) {
          formik.resetForm();
          console.log(results);
          navigate("/");
        }
      } catch (err) {
        console.log(err.response);
        alert(err.response.data.message);
      }
    },
  });

  if (page === "register") {
    formik.validationSchema = forms[page].validation;
  }
  console.log(formik);

  return (
    <div className="form">
      <h1>{page === "login" ? "Login" : "Sign Up"}</h1>

      <form onSubmit={formik.handleSubmit}>
        {fieldsArray.map((field) => {
          const info = {
            field,
            value: formik.values[field],
            touched: formik.touched[field],
            error: formik.errors[field],
            handleChange: formik.handleChange,
            handleBlur: formik.handleBlur,
          };
          return <Input key={field} info={info} showPassword={showPassword} />;
        })}
        <label htmlFor="showPassword">
          Show Password
          <input
            id="checkbox"
            type="checkbox"
            value={showPassword}
            name="showPassword"
            onClick={() => setShowPassword(!showPassword)}
          />
        </label>
        <br />
        <NavLink to={page === "login" ? "/signup" : "/login"}>
          {page === "login"
            ? "No account? Click Here."
            : "Already have an account? Click here."}
        </NavLink>
        <input
          id="submit"
          type="submit"
          value={page === "login" ? "Log In" : "Submit"}
          className="submit"
        />
      </form>
    </div>
  );
};

export default Form;
