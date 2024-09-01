import React from 'react'

const PersonalData = ({formData, setFormData}) => {
  return (
    <>
      <div className='container'>
        <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" 
            value={formData.name} onChange={(e)=>{
              setFormData({...formData, name: e.target.value})
            }}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="phone" 
            value={formData.phone} onChange={(e)=>{
              setFormData({...formData, phone: e.target.value})
            }}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" 
            value={formData.email} onChange={(e)=>{
              setFormData({...formData, email: e.target.value})
            }}/>
          </div>
        </form>
      </div>
    </>
  )
}

export default PersonalData