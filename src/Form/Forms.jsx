import React, { useState } from 'react'
import './Form.css'

const Forms = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    date: "",
  })

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationError = validateForm(formData);
    setErrors(ValidationError);
    if (Object.keys(ValidationError).length === 0) {
      console.log("Successfully Submitted", formData);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validateForm = (data) => {
    let errors = {};
    if (!data.firstname) {
      errors.firstname = 'First name required!!!'
    }
    if (!data.lastname) {
      errors.lastname = 'Last name required!!!'
    }
    if (!data.email) {
      errors.email = 'Email required!!!'
    } else if(!validateEmail(data.email)) {
      errors.email = 'Invalid email!!!'
    };
    if (!data.age) {
      errors.age = 'Age required!!!'
    }
    if (!data.date) {
      errors.date = 'Date required!!!'
    }

    return errors;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <div className='contain'>
      <div className='form-container'>
        <h2>Registration Form</h2>
        <div className='form_wrapper'>
          <form onSubmit={handleSubmit}>
            <div className="form_control">
              <input
                type="text"
                name='firstname'
                placeholder='First Name *'
                onChange={handleChange}
                value={formData.firstname}
              />
              {errors.firstname && <div className="error">{errors.firstname}</div>}
            </div>
            <div className="form_control">
              <input
                type="text"
                name='lastname'
                placeholder='Last Name *'
                onChange={handleChange}
                value={formData.lastname}
              />
              {errors.lastname && <div className="error">{errors.lastname}</div>}
            </div>
            <div className="form_control">
              <input
                type="email"
                name='email'
                placeholder='Enter your Email *'
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form_control">
              <input
                type="number"
                name='age'
                placeholder='Enter your age *'
                onChange={handleChange}
                value={formData.age}
              />
              {errors.age && <div className="error">{errors.age}</div>}
            </div>
            <div className="form_control">
              <label htmlFor="date">Select Date: </label>
              <input
                type="date"
                id='date' name='date'
                onChange={handleChange}
                value={formData.date}
              />
              {errors.date && <div className="error">{errors.date}</div>}
            </div>
            <button type='Submit'>Register</button>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Forms