import React from "react";
import { CustomDropzone } from "./components/CustomDropzone";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="upload-container">
        <CustomDropzone
          heading="Attachment"
          description="Click to upload"
          onHandleLoad={(v) => {
            console.log(v);
          }}
          showSelectedFiles={false}
        />
      </div>
      <div className="map-container">

      </div>
    </div>
  );
}

export default App;
