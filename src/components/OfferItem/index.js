import React from 'react';
import Button from '../../components/Button';
import ImgCar from '../../assets/car-icon.png'
import './styles.css';

const OfferItem = (props) => (
  
    <li 
      className='oc-item-list'
      key={props.id}
    >
      <div className="oc-elem-item">
       <img src={ImgCar} alt="Image car"/>
      </div>
      <div className="oc-elem-item infos-item-list">
        <h3>Type user: {props.typeUser}</h3>
        <span><strong>Whither: </strong>{props.whither}</span>
        <span><strong>Date: </strong>{props.day}-{props.month}-{props.year}</span>
      </div>
      <div className="oc-elem-item oc-options-item ">
        <Button
          name={props.nameButton}
          className="green"
          onClick={props.onClick}
        />
      </div>
    </li>      
);

export default OfferItem;
