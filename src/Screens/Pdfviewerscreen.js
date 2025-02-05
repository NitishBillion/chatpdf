import React, { useState, useEffect } from "react";
import Sidepanel from "../Components/SidePanel";
import Chat from "../Components/Chat";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "bootstrap/dist/css/bootstrap.min.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Pdfviewerscreen() {
  const [numPages, setNumPages] = useState(null);

  const location = useLocation();
  const pdfFile = location.state?.pdfFile;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pdfWidth, setPdfWidth] = useState(460); // Default PDF width
  const fileName = location.state?.fileName;

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth > 1000 ? 600 : 320; // Auto-scale width for readability
      setWindowWidth(window.innerWidth);
      setPdfWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div class="mainscreen">
      <Sidepanel />

      <div style={{ position: "relative", width: "15px", height: "100%" }}>
        <div
          style={{
            background: "rgb(203, 203, 203)",
            width: "0px",
            height: "100%",
          }}
        ></div>
      </div>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-2 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center me-md-auto link-body-emphasis"
          >
            <span class="fs-4">{fileName}</span>
          </a>
        </header>

        <div className="container mt-1 ">
          <div className="row ">
            {/* First Container - PDF Viewer (Hidden on Small Screens) */}
            <div className="col-lg-6 col-12 border bg-light shadow d-none d-lg-block mx-0 px-0">
              <div className="pdf-container">
                {pdfFile ? (
                  <Document
                    file={`data:application/pdf;base64,${pdfFile}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="w-100"
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        width={pdfWidth} // Ensures the PDF fits inside the container
                        className="pdf-page"
                      />
                    ))}
                  </Document>
                ) : (
                  <p className="text-center text-danger">
                    No PDF file selected.
                  </p>
                )}
              </div>
            </div>

            {/* Second Container */}
            <div className="col-lg-6 col-12 border position-relative shadow mt-lg-0 mx-0 px-1">
              <h5>Chat</h5>
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdfviewerscreen;
