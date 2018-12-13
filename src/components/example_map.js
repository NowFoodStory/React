import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow
} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

import Select from "react-select";
import "./map.scss";


const GoogleMapsWrapper = withScriptjs(
  withGoogleMap(props => {
    const { onMapMounted, ...otherProps } = props;
    return (
      <GoogleMap
        {...otherProps}
        ref={c => {
          onMapMounted && onMapMounted(c);
        }}
      >
        {props.children}
      </GoogleMap>
    );
  })
);

const options = [
  { value: "", label: "所有運動場地" },
  { value: "basketball", label: "籃球" },
  { value: "swimming", label: "游泳" },
  { value: "billiard", label: "桌球" }

];
export default class MapPage extends React.Component {
  state = {
    markers: [],
    isOpen: false,
    plaSid: "",
    selectedOption: null
  };

  handleChangeSelect = selectedOption => {
    this.setState({ selectedOption });
    console.log(Option selected:, selectedOption);
    console.log(selectedOption.value);
    fetch("http://localhost:3000/map/place/" + selectedOption.value)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ markers: data });
      });
  };

  componentDidMount() {
    console.log("Mounted @ " + Date.now());
    const url = "http://localhost:3000/map/place/";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data });
      });
  }

  _mapRef = null;

  handleToggleOpen = e => {
    this.setState({
      isOpen: true,
      plaSid: e
    });
    console.log(this.state.plaSid);
  };

  _handleMapMounted = c => {
    if (!c || this._mapRef) return;
    this._mapRef = c;
    console.log("Ref set later @ " + Date.now());
  };

  _handleBoundsChanged = () => {
    if (!this._mapRef) return;
    const center = this._mapRef.getCenter();
    const bounds = this._mapRef.getBounds();
    // console.log(center, bounds);
  };

  handleChange = evt => {
    evt.preventDefault();
    console.log(evt.target.value);
    fetch("http://localhost:3000/map/place/" + evt.target.value)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data });
      });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <React.Fragment>
        <Select
          value={selectedOption}
          onChange={this.handleChangeSelect}
          options={options}
          className="position-absolute rb-search"
          placeholder="所有運動場地"
        />

        <GoogleMapsWrapper
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBCaULDI__K53ovplUjlGju21UPWjZYR1M"
          loadingElement={<div style={{ height: 100% }} />}
          containerElement={<div style={{ height: 100% }} />}
          mapElement={<div style={{ height: 100% }} />}
          defaultZoom={13}
          defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
          onMapMounted={this._handleMapMounted}
          onBoundsChanged={this._handleBoundsChanged}
        >
          <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
            {this.state.markers.map(marker => (
              <Marker
                key={marker.plaSid}
                position={{ lat: marker.plaLatitude, lng: marker.plaLongitude }}
                onClick={() => this.handleToggleOpen(marker.plaSid)}
                value={marker.plaSport}
                className="sportItems"
              >
                {this.state.isOpen && marker.plaSid === this.state.plaSid && (
                  <InfoWindow onCloseClick={this.handleToggleClose}>
                    <React.Fragment>
                      <h6>{marker.plaName}</h6>

                      <p> {`${marker.plaArea}` + `${marker.plaAddress}`}</p>
                    </React.Fragment>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </MarkerClusterer>
        </GoogleMapsWrapper>
      </React.Fragment>
    );
  }
}