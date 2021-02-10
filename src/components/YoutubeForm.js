import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};

const onSubmit = (values) => console.log(values);

function YoutubeForm(params) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Inavlid Email!").required("Required!"),
    channel: Yup.string().required("Required!"),
  });

  return (
    <div>
      <h1 className="text-center">Youtube Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="name" data-testid="name">
              Name
            </label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="email" data-testid="email">
              Email
            </label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email">
              {(errorMsg) => {
                return <TextError>{errorMsg}</TextError>;
              }}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="channel" data-testid="email">
              Channel
            </label>
            <Field type="text" name="channel" id="channel" />
            <ErrorMessage name="channel" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="comments" data-testid="comments">
              Comments
            </label>
            <Field as="textarea" name="comments" id="comments" />
            <ErrorMessage name="comments" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="address" data-testid="address">
              Address with render
            </label>
            <Field name="address">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div className="error"> {meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default YoutubeForm;
