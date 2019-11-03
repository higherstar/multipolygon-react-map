import React from "react";
import GoogleMapReact from "google-map-react";
import { multiPolygon, polygon } from '@turf/helpers';

export const CustomGoogleMap = ({ center, zoom, polygonData }) => {
  const mapHandler = React.useRef(null);

  React.useEffect(() => {
    mapHandler.current && mapHandler.current.data.addGeoJson(polygon(polygonData));
  }, [polygonData]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
      onGoogleApiLoaded={({map, maps}) => {
        mapHandler.current = map;
        polygonData && map.data.addGeoJson(polygon(polygonData));
      }}
      yesIWantToUseGoogleMapApiInternals
    >

    </GoogleMapReact>
  )
};
