import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => console.log(values);

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required!";
  }

  if (!values.email) {
    errors.email = "Required!";
  }
  if (!values.channel) {
    errors.channel = "Required!";
  }

  return errors;
};

function YoutubeForm(params) {
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
    validate,
  });

  return (
    <div>
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

export default YoutubeForm;
