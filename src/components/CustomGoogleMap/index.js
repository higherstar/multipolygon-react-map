import React from "react";
import GoogleMapReact from "google-map-react";
import { multiPolygon, polygon } from '@turf/helpers';

const getPosition = (point) => {
  return { lat: point[0], lng: point[1] };
};

export const CustomGoogleMap = ({ center, zoom, polygonData }) => {
  console.log(polygonData);
  let fc = multiPolygon([
    [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
    [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
  ]);
  let fc1 = polygon([
    [
      [
        92.46093749999999,
        70.37785394109224
      ],
      [
        41.1328125,
        53.74871079689897
      ],
      [
        84.72656249999999,
        23.241346102386135
      ],
      [
        136.40625,
        39.095962936305476
      ],
      [
        124.1015625,
        64.32087157990324
      ],
      [
        92.46093749999999,
        70.37785394109224
      ]
    ]
  ]);
  console.log(fc1);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
      onGoogleApiLoaded={({map, maps}) => {
        console.log(map, maps);
        map.data.add(fc.geometry);
      }}
      yesIWantToUseGoogleMapApiInternals
    >

    </GoogleMapReact>
  )
};
