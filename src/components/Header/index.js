import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = (props) => (
  <header id="oc-header">
    <div className="oc-buttons">
      <Link to={props.linkHome}>
        <button className="oc-button">
          <img className="logo" src={props.logo} alt={props.logoAlt}/>
        </button>
      </Link>
      <Link to="/ride-register">
        <button className="oc-button">
          {props.nameLinkOne}
        </button>
      </Link>
      <Link to="/driver-admin">
        <button className="oc-button">
          {props.nameLinkTwo}
        </button>
      </Link>
      <Link to="/passenger-admin">
        <button className="oc-button">
          {props.nameLinkThree}
        </button>
      </Link>
    </div>
  </header>
)

export default Header;