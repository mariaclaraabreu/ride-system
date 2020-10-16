import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Input from '../../components/Input';
import firebase from '../../services/api'
import Button from '../../components/Button'
import OfferItem from  '../../components/OfferItem';
import './styles.css';

const DriverAdmin = () => {
  const [rides, setRides] = useState([])
  const [filteredRides, setFilteredRides] = useState([]);
  const [candidates, setCandidates] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState('')
  const [typeUser, setTypeUser] = useState('')
  const [whither, setWhither] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  async function handleAskRide(id) {

  }

  async function handleSearchRide(search) {
    (search.length === 0) ? setFilteredRides(rides)
    : setFilteredRides(rides.filter((ride) => ride.whither.includes(search)));
  }

  async function handleCandidates() {
    setCandidates(rides.filter(item => item.candidate !== ''))
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

        setCandidates(ridesList.filter(ride => ride.candidate !== ''));
        setRides(ridesList.filter(ride => ride.typeUser === 'passageiro'));
        setFilteredRides(ridesList.filter(ride => ride.typeUser === 'passageiro'))
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
          <h3>Candidates</h3>
          <ul className="candidates">
            {candidates.map(item => (
              <li>	&#9787;{item.candidate}</li>
            ))}
          </ul>
    
          <h1 className="title-adm">Rides</h1>
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
                  nameButton="Give a ride"
                >
                </OfferItem>
              ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default DriverAdmin
