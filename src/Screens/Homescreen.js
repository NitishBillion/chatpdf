import React from "react";
import Sidepanel from "../Components/SidePanel";
import logo from "../Assets/Images/logo.jpg";
import FileUploader from "../Components/FileUploader";
import pdfImg from "../Assets/Images/UploadFileIcon.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

function Homescreen() {
  return (
    <div class="mainscreen">
      <Sidepanel/>
      <div style={{ position: "relative", width: "15px", height: "100%" }}>
        <div style={{background: "rgb(203, 203, 203)",width: "0px",height: "100%",}}></div>
        <div style={{position: "absolute",width: "7px",height: "100%",top: "0px",left: "-3px",cursor: "col-resize",zindex: "10",}}></div>
      </div>
      <div class="container-fluid">
        <div class=" py-3 m-8 my-5 text-center">
          <img class="d-block mx-auto mb-4"src={logo}alt=""width="200"height="57"/>
          <h1 class="display-5 fw-bold text-body-emphasis">
            Talk with any PDF
          </h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Join millions of students, researchers and professionals to
              instantly answer questions and understand research.
            </p>
            <div class="pb-2 pt-2 align-items-center mx-auto my-sm-6 rounded-3 border shadow-lg">
              {/* <i class="bi bi-filetype-pdf" /> */}
              <img src={pdfImg} alt="pdf.png" className="pdf-logo" />
              <h4 className="d-flex pb-2 pt-2 justify-content-center">
                Click to upload PDF
              </h4>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <FileUploader />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
