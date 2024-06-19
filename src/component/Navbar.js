import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ICTMS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/more">Contact</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/createleahue">Create leahue</a></li>
                <li><a className="dropdown-item" href="/pointtable">Point table</a></li>
                <li><a className="dropdown-item" href="/scoreboard">Score board</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><a className="dropdown-item" href="/reg">Registation</a></li>
              </ul>
            </li>
            <li className="nav-item">
              
            </li>
          </ul>
          <form className="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button> 
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
