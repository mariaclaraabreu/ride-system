import React, { useState, useEffect } from 'react';
import firebase from '../../services/api';
import { useHistory } from 'react-router-dom';
import Header from  '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './styles.css';

const RideRegister = () => {
  const [typeUser, setTypeUser] = useState('')
  const [whither, setWhither] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const history = useHistory()

  useEffect(() => {
    firebase
      .firestore()
      .collection('rides')
      .get()
      .catch((err) => {
        console.log(err)
      })
  }, [])

  async function handleAddRide(e) {
    e.preventDefault()
    try {
      firebase.firestore().collection('rides').add({
        typeUser,
        whither,
        day,
        month,
        year,
        candidate: '',
      })

      history.push('/')
    } catch (err) {
      alert(`Erro ao cadastrar${err}`)
    }
  }

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
            <h1>Register Ride</h1>
            <form action="">
              {"Type user"}
              <Input
                placeholder="Driver or Passenger"
                value={typeUser}
                onChange={(e) => setTypeUser(e.target.value)}
              />
               {"Whither"}
               <Input
                placeholder="Rua Aurora"
                value={whither}
                onChange={(e) => setWhither(e.target.value)}
              />
               {"Day"}
              <Input
                placeholder='Ex: 05'
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
               {"Month"}
              <Input
                placeholder='Ex: March'
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              {"Year"}
              <Input
                placeholder='Ex: 2020'
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </form>
            <Button
              name="Add Ride"
              className="blue"
              onClick={handleAddRide}
            />

          </div>
          
        </div>
      </>
    );
}

export default RideRegister;