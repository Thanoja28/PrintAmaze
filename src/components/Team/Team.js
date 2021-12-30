import React from 'react';
import './Team.css';
import profile from '../../images/Thano.JPG';
import pro1 from '../../images/Thajeev.jpg';
import pro2 from '../../images/Ram.jpg';


function Team() {
    return (
        <>
        <h3 style={{textAlign:"center", fontStyle:"16px"}}>Team Members</h3>
        <div className="card-container">

        <div class="card">
            <img className="img1" src={profile} alt="Avatar" style={{width:"100%"}} />
            <div class="container">
            <h4><b>Thanoja</b></h4> 
            <p>Freelance Web Designer</p> 
            </div>
        </div>

        <div class="card">
            <img className="img" src={pro1} alt="Avatar" style={{width:"100%"}} />
            <div class="container">
            <h4><b>Thajeef</b></h4> 
            <p>Network Engineer</p> 
            </div>
        </div>

        <div class="card">
            <img className="img" src={pro2} alt="Avatar" style={{width:"100%"}} />
            <div class="container">
            <h4><b>Ramanan</b></h4> 
            <p>Software Engineer</p> 
            </div>
        </div>
        </div>
        </>
    )
}

export default Team;
