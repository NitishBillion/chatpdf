import React from "react";
import Homescreen from "./Screens/Homescreen";
import Pdfviewerscreen from "./Screens/Pdfviewerscreen"
// import PdfViewer from "./Components/pdfviewer";
// import ChatPage from './Screens/ChatPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <div style={{ fontFamily: "Arial, sans-serif" }}> */}
        <Routes>
          <Route path="/" element={<Homescreen/>} />
          <Route path="/Pdfviewerscreen" element={<Pdfviewerscreen/>} />
          {/* <Route path="/chat" element={<ChatPage />} /> */}
          {/* <Route path="/view-pdf" element={<PdfViewer />} /> */}
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;