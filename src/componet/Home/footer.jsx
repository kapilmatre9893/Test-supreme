import React from 'react';
import logo from '../../img/logo.png'
const footer = () => {
    return (
        <div>
           <footer className="border-top pt-5 pb-4">
  <div className="container">
    
    <div className="mb-4">
      <a href="/">
        <img src={logo} className="img-fluid" alt="Supreme logo" title="logo"  /> 
      </a>
    </div>


    <div className="row">
    
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="text-uppercase fw-semibold mb-3 foot_text">Applications</h6>
        <ul className="list-unstyled">
          <li><a href="/applications/apparel" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Apparel</a></li>
          <li><a href="/applications/automotive" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Automotive</a></li>
          <li><a href="/applications/filtration" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Filtration</a></li>
          <li><a href="/applications/customised-nonwoven" className=" text-decoration-none opacity-75 d-block per_text">Customised Nonwoven</a></li>
        </ul>
      </div>

      
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="text-uppercase fw-bold mb-3 foot_text" >Company</h6>
        <ul className="list-unstyled">
          <li><a href="/who-we-are" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Who We Are</a></li>
          <li><a href="/global-competency" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Global Competency</a></li>
          <li><a href="/innovation" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Innovation</a></li>
          <li><a href="/esg-impact" className=" text-decoration-none opacity-75 d-block per_text" >ESG Impact</a></li>
        </ul> 
      </div>

    
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="text-uppercase fw-semibold mb-3 foot_text">More</h6>
        <ul className="list-unstyled"> 
          <li><a href="/contact-us" className=" text-decoration-none opacity-75 d-block mb-2 per_text">Contact Us</a></li>
          <li><a href="/careers" className=" text-decoration-none opacity-75 d-block  per_text">Careers</a></li>
        </ul>
      </div>

    
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="text-uppercase fw-semibold mb-3  foot_text">Follow Us</h6>
        <ul className="list-unstyled">
          <li><a href="https://www.linkedin.com/company/supreme-group-company/" target="_blank" rel="noopener noreferrer" className="text-decoration-none opacity-75 d-block per_text" >LinkedIn</a></li>
        </ul>
      </div>
    </div>

   
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 border-top">
      <small className="text-muted mb-2 mb-md-0">©2024. All Rights Reserved.</small>
      <small className="text-muted">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</small>
    </div>
  </div>
</footer>
 
        </div>
    );
};

export default footer;