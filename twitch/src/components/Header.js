import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/">
        <h3>Streamer Paradise</h3>
      </Link>
      <div className="right menu">
        <div className="item">
          <Link to="/">
            <h3>Streams</h3>
          </Link>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
