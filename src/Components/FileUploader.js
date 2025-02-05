import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function FileUploader() {
  const [pdfError, setPdfError] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  const handleFile = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
          const base64Data = reader.result.split(",")[1];
          const fileName = selectedFile.name;
          setPdfFile(base64Data);
          setPdfError("");
          // console.log(pdfFile)
          navigate("/Pdfviewerscreen", { state: { pdfFile: base64Data, fileName } });
        };
      } else {
        setPdfError("Invalid file type. Please select a PDF.");
        setPdfFile(null);
      }
    } else {
      setPdfError("Please select a file.");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="file"
        hidden
        accept=".pdf"
        id="file-upload"
        onChange={handleFile}
      />
      <label htmlFor="file-upload" className="fileuploaderbutton">
        Upload PDF
      </label>
      {pdfError && <span className="text-danger">{pdfError}</span>}
    </div>
  );
}

export default FileUploader;

