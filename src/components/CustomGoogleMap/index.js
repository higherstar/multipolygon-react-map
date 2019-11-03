import React from "react";
import GoogleMapReact from "google-map-react";

export const CustomGoogleMap = ({ center, zoom, data }) => {
  const mapHandler = React.useRef(null);

  React.useEffect(() => {
    drawShapes(data);
  }, [data]);

  const drawShapes = (data) => {
    if (mapHandler.current) {
      data.forEach((item) => {
        mapHandler.current.data.addGeoJson(item);
      });
    }
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
      onGoogleApiLoaded={({map, maps}) => {
        mapHandler.current = map;
      }}
      yesIWantToUseGoogleMapApiInternals
    />
  )
};
