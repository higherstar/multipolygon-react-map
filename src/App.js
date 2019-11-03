import React from "react";
import { CustomDropzone } from "./components/CustomDropzone";
import { CustomGoogleMap } from "./components/CustomGoogleMap";
import "./App.css";
require('dotenv').config();

function App() {
  const [shapes, setShapes] = React.useState(null);
  return (
    <div className="App">
      <div className="upload-container">
        <CustomDropzone
          heading="Attachment"
          description="Click to upload"
          onHandleLoad={(v) => {
            let result = v.result.replace('data:application/json;base64,', '');
            result = result.replace('data:application/octet-stream;base64,', '');
            result = atob(result);
            const shapes = JSON.parse(result).features;
            setShapes(shapes);
          }}
          showSelectedFiles={false}
        />
      </div>
      <div className="map-container">
        <CustomGoogleMap
          center={
            {
              lat: 59.95,
              lng: 30.33
            }
          }
          zoom={1}
          data={shapes}
        />
      </div>
    </div>
  );
}

export default App;
