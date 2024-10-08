import React, { useState, useEffect, Component } from 'react';
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);


  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  componentDidUpdate(prevProps) {
    if (this.props.sharedData !== prevProps.sharedData) {
      console.log("set")
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }
   }

   

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }


  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
    }

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon"  data-icon="la:laptop-code"  data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container" style={{height:'100px'}}>
                <Typical className="title-styles" steps={this.titles} loop={50} wrapper='span' /> <span className="title-styles" style={{animation:'styles_blink__2CKyC 1s infinite step-start'}}>|</span>
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#C56EA8"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:crescent-moon"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
