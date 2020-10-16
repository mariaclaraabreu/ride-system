import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Input from '../../components/Input';
import firebase from '../../services/api'
import Button from '../../components/Button'
import OfferItem from  '../../components/OfferItem';
import './styles.css';

const PassengerAdmin = () => {
  const [rides, setRides] = useState([])
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState('')
  const [typeUser, setTypeUser] = useState('')
  const [whither, setWhither] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  async function handleAskRide(id) {
    firebase
      .firestore()  
      .collection("rides")
      .doc(id)
      .update({
        candidate: 'O usuário Maria das Claras se candidatou'
    });
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('rides')
      .onSnapshot((snapshot) => {
        const ridesList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            typeUser: doc.data().typeUser,
            whither: doc.data().whither,
            day: doc.data().day,
            month: doc.data().month,
            year: doc.data().year,
            candidate: doc.data().candidate,
          }
        })

        setRides(ridesList.filter(ride => ride.typeUser.includes('motorista')));

      })
  }, [])

  return (
    <>
      <Header 
          linkHome="/"
          nameLinkOne="Register ride"
          nameLinkTwo="Driver"
          nameLinkThree="Passenger"
      />
      <div className="container">
        <div className="content">
          <h1 className="title-adm">Adm</h1>
   
              <ul className="list-items">
                {rides.map(item => (
                  <OfferItem 
                    key={item.id}
                    typeUser={item.typeUser}
                    whither={item.whither}
                    day={item.day}
                    month={item.month}
                    year={item.year}
                    onClick={() =>  handleAskRide(item.id)}
                    nameButton="Ask ride"
                  >
                  </OfferItem>
                ))}
              </ul>
        </div>
      </div>
    </>
  )
}

export default PassengerAdmin
