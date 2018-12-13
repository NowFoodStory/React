import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";

import Nav from "./Nav";
import Footer from "./Footer";
// import {
//   GoogleMap,
//   Marker,
//   withGoogleMap,
//   withScriptjs,
//   InfoWindow
// } from "react-google-maps";
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

// import {GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 




// const MapWithAMarker = withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// );

  

class Map_page extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        };
      this.handleChange = this.handleChange.bind(this); 
      
      

    }
    
    handleChange = (evt) => {
        let key = evt.target.id;
        let value = evt.target.value;
        this.setState({
            [key]: value
        })
              
    }

    componentDidMount() { 
            
    }   
    
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
    
    render() {
      const style = {
        width: '91%',
        height: '70vh'
      }
      return (
        <React.Fragment>
            <Nav/>
          <div className=" pt_72">
            
            <div className="container-fluid reset pr_10">
              <div className="row">
                <div className="col-4 gray_bg position-fixed">
                    <div className="pl_10 mt-5 pr-5">
                        <ul className="pl-0">
                            <li className="d-inline font_2 notoSans color_70 font_500">                                
                                <Link className="color_70" to="/products">篩選器</Link>                               
                            </li>
                            <li className="d-inline font_2 notoSans color_green mx-2">
                               | 
                            </li>
                            <li className="d-inline font_2 notoSans color_green font_500">
                                美食地圖                               
                            </li>
                        </ul>
                       
                    </div>
                </div>
                <div className="col-8 ml-auto pl-5 pt-5 mt-1">

                    {/* <MapWithAMarker
                      isMarkerShown
                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyA1OtYaoJcr9bDQB_YWlkNecXobenhxnpA"
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      loadingElement={<div style={{ height: `100%` }} />}
                    /> */}

                    <Map google={this.props.google} zoom={15}
                         onClick={this.onMapClicked}
                         style={style}
                         initialCenter={{
                          lat: 25.033804,
                          lng: 121.543414
                        }}
                    >
                  
 
                      <Marker onClick={this.onMarkerClick}
                              title={'The marker`s title will appear as a tooltip.'}
                              icon={{
                                url: "http://localhost:3000/uploads/location.svg",
                              }}
                              src={'http://localhost:3000/uploads/16121861_1546636742028170_141390345_o.jpg'}
                              name={'木村屋 Kimuraya'}
                              position={{lat: 25.037137, lng: 121.552805}}
                      />
                      <Marker onClick={this.onMarkerClick}
                              name={'Faomii Bakery 法歐米麵包工坊'}
                              position={{lat: 25.035224, lng: 121.548481}}
                              
                      />

                      <InfoWindow onClose={this.onInfoWindowClose} 
                                  marker={this.state.activeMarker}
                                  visible={this.state.showingInfoWindow}>>
                          <div className="row reset">
                            <div className="col text-center">
                              <figure className="circle figure">
                                <img className="w_100" src={this.state.selectedPlace.src}></img>
                              </figure>                             
                              <h5 className="notoSans text-center"><a className="color_black hover_orange" href="http://localhost:3001/home">{this.state.selectedPlace.name}</a></h5>
                            </div>                          
                          </div>
                      </InfoWindow>
                    </Map>


                </div>
              </div>
            </div>
            {/* <Footer/> */}
            
          </div>
          
        </React.Fragment>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyA1OtYaoJcr9bDQB_YWlkNecXobenhxnpA')
  })(Map_page)