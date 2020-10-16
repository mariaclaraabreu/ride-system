import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import Input from '../../components/Input';
import firebase from '../../services/api'
import OfferItem from  '../../components/OfferItem';
import './styles.css';

const PassengerAdmin = () => {
  const [rides, setRides] = useState([])
  const [filteredRides, setFilteredRides] = useState([]);


  async function handleAskRide(id) {
  }

  async function handleSearchRide(search) {
    (search.length === 0) ? setFilteredRides(rides)
    : setFilteredRides(rides.filter((ride) => ride.whither.includes(search)));
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

        setRides(ridesList.filter(ride => ride.typeUser === 'motorista'));
        setFilteredRides(ridesList.filter(ride => ride.typeUser === 'motorista'))
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
          <small>{"Search"}</small>
            <Input 
              placeholder="Search by street name"
              onChange={function (e) {
                handleSearchRide(e.target.value)
              }}
            />
              <ul className="list-items">
                {filteredRides.map(item => (
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
