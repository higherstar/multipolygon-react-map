import React from "react";
import GoogleMapReact from "google-map-react";

export const CustomGoogleMap = ({ center, zoom, polygonData }) => {
  console.log(polygonData);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
    >

    </GoogleMapReact>
  )
};
