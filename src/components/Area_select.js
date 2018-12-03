import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../main.css";

class Area extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value:''
        };
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (evt) => {
        this.setState({
            value: evt.target.value,
        });        
    }
    
    render() {
      return (
        <React.Fragment>  
            <select className="form-control notoSans mt-4 gray_form" id="place" value={this.state.value} onChange={this.handleChange}>
                            <option>地區</option>
                            <option>大安區</option>
                            <option>信義區</option>
            </select>
        </React.Fragment>
      );
    }
  }

  export default Area;