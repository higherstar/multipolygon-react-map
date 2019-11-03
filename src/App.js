import React from "react";
import { CustomDropzone } from "./components/CustomDropzone";
import { CustomGoogleMap } from "./components/CustomGoogleMap";
import "./App.css";
require('dotenv').config();

function App() {
  const [polygonData, setPolygonData] = React.useState(null);
  return (
    <div className="App">
      <div className="upload-container">
        <CustomDropzone
          heading="Attachment"
          description="Click to upload"
          onHandleLoad={(v) => {
            const result = atob(v.result.replace('data:application/json;base64,', ''));
            setPolygonData(JSON.parse(result));
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
          polygonData={polygonData}
        />
      </div>
    </div>
  );
}

export default App;
