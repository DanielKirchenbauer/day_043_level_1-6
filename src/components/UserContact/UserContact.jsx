import React, { useState } from 'react'

const UserContact = () => {

    const [firstName, setFirstName] = useState("");

    const handleInputFirstName = (event) => {
        event.preventDefault();
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState("");

    const handleInputLastName = (event) => {
        event.preventDefault();
        setLastName(event.target.value);
    }

    const [email, setEmail] = useState("");

    const handleInputEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }



  return (
    <div>
        <div>
      <input onChange={handleInputFirstName} type="text" name="first_name" id="first_name" />
      <input onChange={handleInputLastName} type="text" name="last_name" id="last_name" />
      <input onChange={handleInputEmail} type="email" name="email" id="email" />
        </div>
        <div>Vorname: {firstName}</div>
        <div>Nachname: {lastName}</div>
        <div>Email: {email}</div>
    </div>
  )
}

export default UserContact
