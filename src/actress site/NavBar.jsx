import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <h1 id='dil'>Dilraba Dilmurat</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavaltMarkup" aria-controls="navbarNavaltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavaltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link" to="/films">Projects</Link>
        <Link className="nav-link" to="/biography">Biography</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
