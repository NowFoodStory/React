import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";
import $ from "jquery";

import Nav from "./Nav";
import Footer from "./Footer";
import CitySelect from "./City_select";
import AreaSelect from "./Area_select";
import Commodity from "./Commodity";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow
} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);
  



class Map_page extends Component {
    constructor(props) {
      super(props);
      this.state = {
          
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
    
    render() {
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
                <div className="col-8 ml-auto pl-5 pt-3">

                    <MapWithAMarker
                      isMarkerShown
                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyA1OtYaoJcr9bDQB_YWlkNecXobenhxnpA"
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      loadingElement={<div style={{ height: `100%` }} />}
                    />

                </div>
              </div>
            </div>
            {/* <Footer/> */}
            
          </div>
          
        </React.Fragment>
      );
    }
  }

  export default Map_page;