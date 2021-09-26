import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div className="container">
          <a className="navbar-brand" href="/"><h2>Top Developers</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Developers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Details</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container header-text">
        <div className="col-md-12">
            <div className="row my-5 mx-2 text-center">
                <div className="border bg-info p-5">
                  <h1>Hire Top Developers For Your Projects.</h1>
                  <h4>You can hire our expert developrs. They are super skill for any kind of project.</h4>
                  <h1>Total Budget: $800 Million.</h1>
                </div>
            </div>
        </div>
      </div>
    </>
    );
};

export default Header;