import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const App: React.FC = () => {
  return (
    <div>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default App;
