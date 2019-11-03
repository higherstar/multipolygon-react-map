import React from "react";
import GoogleMapReact from "google-map-react";
// import { greatCircle, point } from '@turf/turf';
import { multiPolygon } from '@turf/helpers';

export const CustomGoogleMap = ({ center, zoom, polygonData }) => {
  console.log(polygonData);
  let fc = multiPolygon([
    [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
    [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
  ]);
  console.log(fc);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
    >

    </GoogleMapReact>
  )
};
