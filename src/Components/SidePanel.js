import React from "react";
// import { useNavigate } from 'react-router-dom';
// import FileUploader from "../Components/FileUploader";
// import MainLogo from '../Assets/truetalent_io_cover.jpg';
// import ChatLogo from '../Assets/chat.png'
import logo from "../Assets/Images/logo.jpg";
import "../App.css";
// import useWindowDimensions from "./Dimensions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Sidepanel.css";

function Sidepanel() {
  // const { height, width } = useWindowDimensions();

  return (
    <div class="sidebar">
      <div className="row">
        <div className="side col-auto min-vh-100 d-flex justify-content-between flex-column ">
          <div>
            <a
              href="/"
              className="text-decoration-none d-none d-sm-inline d-flex align-itemcenter ms-3 my-6">
              {/* <a href="/" class="d-flex justify-content-center mt-3 mb-3"> */}
              <img class="d-block" src={logo} alt="Bootstrap" width="200" height="50" />
            </a>
            <ul>
            <a className="text-decoration-none text-white align-itemcenter ms-3 my-6">
              <span className="ms-1 mx-auto fs-4 d-none d-sm-inline my-6"> PDF Parser </span>
            </a>
            </ul>
            
            <hr className="text-secondary d-none d-sm-block" />

            <ul class="nav nav-pills flex-column justify-content-center mt-3 ms-2">
              {/* <ul class="nav nav-tabs flex-column"> */}

              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-3 d-none d-sm-inline" title="Dashboard">Dashboard</span>
                </a>
              </li>

              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-3 d-none d-sm-inline" title="Home">Home</span>
                </a>
              </li>

              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className="bi bi-cloud-upload"></i>
                  <span className="ms-3 d-none d-sm-inline" title="Upload PDF">Upload PDF</span>
                </a>
              </li>

              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className="bi bi-person-add"></i>
                  <span className="ms-3 d-none d-sm-inline" title="Sign-up">Sign-up</span>
                </a>
              </li>

              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a href="#" class="nav-link text-white fs-5" aria-current="page">
                  <i className="bi bi-person-check"></i>
                  <span className="ms-3 d-none d-sm-inline" title="Sign-in">Sign-in</span>
                </a>
              </li>

            </ul>
            {/* <button type="button" class="btn btn-primary btn-sm px-4 gap-3">Sign Up</button> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
