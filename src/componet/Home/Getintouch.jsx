import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Getintouch = () => {
 
    const initialValues = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
  
    const validationSchema = Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      company: Yup.string().required('Company name is required'),
      message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
      console.log('Form submitted:', values);
      // Do something with values, e.g., send to API
      resetForm();
    };

  return (
    <div>
      <section className="Getintouch">
        <div className="container">
          <div className="row">
            <div className="offset-md-1 col-md-5">
              <div className="Get_text">
                <h2>Get in touch</h2>
                <hr></hr>
                <p>For general enquiries</p>
                <ul>
                  <li>
                    {" "}
                    <span>Address</span>
                    <br />
                    110, 16th Road, Chembur, Mumbai – 400071
                  </li>
                  <li>
                    {" "}
                    <span>Phone :</span> <br />
                    +91 22 25208822
                  </li>
                  <li>
                    {" "}
                    <span>Email :</span> <br />
                    info@supremegroup.co.in
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-md-5">
            <div className="From_div">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <Field
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Full name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="mb-3">
              <Field
                type="text"
                className="form-control"
                id="company"
                name="company"
                placeholder="Company"
              />
              <ErrorMessage name="company" component="div" className="text-danger" />
            </div>

            <div className="mb-2">
              <Field
                as="textarea"
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                rows="2"
              />
              <ErrorMessage name="message" component="div" className="text-danger" />
            </div>

            <div className="btn_send">
              <button type="submit" className="btn">Send</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Getintouch;
