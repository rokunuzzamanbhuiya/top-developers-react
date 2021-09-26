import React from 'react';
import './Detail.css';

const Detail = (props) => {

  const {name, role, age, mobile, country, salary, picture}=props.detail || {}

  return (
    <div className="col-md-4">
      <div className="row m-2 text-center">
        <div className="border bg-info p-5 mb-4">
          <div className="user-image">
            <img className="p=5" src={picture.large} alt="" />
          </div>
          <h5>Name: {name}</h5><hr className="m-2" />
          <h5>Age: {age}</h5><hr className="m-2" />
          <h5>Role: {role}</h5><hr className="m-2" />
          <h5>Mobile: {mobile}</h5><hr className="m-2" />
          <h5>Country: {country}</h5><hr className="m-2" />
          <h5>Salary: ${salary}</h5><hr className="m-2" />
          <button 
          onClick={ ()=> props.handleAddDetail(props.detail)}
              className="btn btn-primary px-4 m-2 button"><i className="fas fa-shopping-cart"></i> Hire Now
          </button>
          <hr className="m-2" />  
          <div>
            <i className="fab fa-facebook-square p-2"></i>
            <i className="fab fa-twitter-square p-2"></i>
            <i className="fab fa-linkedin p-2"></i>
          </div>    
        </div>
      </div>
    </div>
   );
};


export default Detail;