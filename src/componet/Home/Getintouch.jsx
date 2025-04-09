import React from "react";

const Getintouch = () => {
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
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Company"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="message"
                    rows="2"
                  ></textarea>
                </div>
                <div className="btn_send">
                  <button className="btn">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Getintouch;
