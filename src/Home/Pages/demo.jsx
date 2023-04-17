import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileUpdate(props) {
  const [formData, setFormData] = useState({
    fname: '',
    lname: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`/usersUpdate/${props.userId}`, formData)
      .then(res => {
        console.log(res);
        props.history.push(`/user/${props.userId}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default ProfileUpdate;
