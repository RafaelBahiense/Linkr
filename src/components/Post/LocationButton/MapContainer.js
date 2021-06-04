import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export function MapContainer(props) {
  const { geolocation } = props;

  const mapStyles = {
    borderRadius: 20,
    width: 557,
    height: 170
  };

  const containerStyle = {
    position: 'relative',
    width: 557,
    height: 170
  };

  function displayMarkers() {
    return state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
        />
      );
    });
  }

  const state = {
    stores: [
      {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
        local: "Seu local",
      },
    ],
  };

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      containerStyle={containerStyle}
      initialCenter={{
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      }}
    >
      {displayMarkers()}
    </Map>
  );
}

export default GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyC6uoRsY_pTIfpR_9pXJXtUxyViXLXH6g8",
}))(MapContainer);