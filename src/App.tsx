import React from "react";
import Prescription from "./Prescription";
// import Billing from "./Billing";
import { PDFViewer } from "@react-pdf/renderer";
// import MyDocument from "./MyDocument";

const App: React.FC = () => {
  return (
    <div>
      <PDFViewer>
        <Prescription />
      </PDFViewer>
      {/* <MyDocument /> */}
      {/* <Billing/> */}
    </div>
  );
};

export default App;
