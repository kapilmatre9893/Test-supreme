import React from 'react';
import logo from '../../../img/logo.png'
import img1  from '../../../img/img1.png'
import img2 from '../../../img/img2.png'
import '../Header/header.css';
const header = () => {
    return (
        <div>
          <header>
          <nav className="navbar navbar-expand-lg pt-2 pb-2">
  <div className="container">
   <img src={logo} alt='logo'  className="img-fluid" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

    {/* <form className="d-flex">
        
        <button className="btn btn-outline-success" type="submit">Contact Us</button>
      </form> */}
      <ul className="navbar-nav align-items-center">
        <li className="nav-item">
        <button type="button" className="btn Contact">Contact Us</button>
        </li>
        <li className="nav-item">
        <img src={img2} alt='logo'  className="img-fluid" />
        </li>
        <li className="nav-item">
        <img src={img1} alt='logo'  className="img-fluid" />
        </li>
      </ul>
     
    </div>
  </div>
</nav>
            </header>
        </div>
    );
};

export default header;