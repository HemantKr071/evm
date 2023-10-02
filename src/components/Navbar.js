import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <>
  



    <nav class="navbar navbar-expand-lg  bg-dark navbar-dark">
  <div class="container-fluid">
   {/* <a class="navbar-brand" href="#">Navbar</a>*/}
   <img id='logoimg' alt='logo' src='https://jamieturner.live/wp-content/uploads/2018/05/2.png'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#"><b>About</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Contact</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Login</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b>Register</b></a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search for Events" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"><b>Search</b></button>
      </form>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar