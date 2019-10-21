import React, {useState} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignUpFormJayne({values, errors, touched, isSubmitting}) {
  return (
    <Form>
      <div>
        <Field type="text" name="name" placeholder="Name" /> 
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <Field type="text" name="surname" placeholder="Surname" /> 
        {touched.surname && errors.surname && <p>{errors.surname}</p>}
      </div>
      <div>
        <Field type="email" name="email" placeholder="Email" />      
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" /> 
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({ email, password, name, surname }) {
    return {
      name: name || "",
      surname: surname || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be a least two characters long." )
      .required("Name is required"),
    surname: Yup.string()
      .min(3, "Surname must be a least three characters long." )
      .required("Surname is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),
  
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      console.log(values);
      // axios
      //   .post("https://yourdatabaseurlgoeshere.com", values)
      //   .then(res => {
      //     console.log(res); // Data was created successfully and logs to console
      //     resetForm();
      //     setSubmitting(false);
      //   })
      //   .catch(err => {
      //     console.log(err); // There was an error creating the data and logs to console
      //     setSubmitting(false);
      //   });
    }
  }
})(SignUpFormJayne);

export default FormikSignUpForm;