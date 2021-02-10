import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => console.log(values);

function OldYoutubeForm(params) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Inavlid Email!").required("Required!"),
    channel: Yup.string().required("Required!"),
  });
  const {
    touched,
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <h1 className="text-center">Youtube Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name" data-testid="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <div className="error"> {errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email" data-testid="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <div className="error"> {errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel" data-testid="email">
            Channel
          </label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.channel && touched.channel ? (
            <div className="error"> {errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
        <button className="danger-btn" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
