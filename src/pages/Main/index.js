import React,  { Component } from 'react';
import Header from  '../../components/Header';
import './styles.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header 
          linkHome="/"
          nameLinkOne="Register ride"
          nameLinkTwo="Driver"
          nameLinkThree="Passenger"
        />
        <footer>
          @2020 Created with love by Maria Clara &#10083;
        </footer>
      </div>
    );
  }
}