import React from 'react';
import './Team.css';
import profile from '../../images/Thano.JPG';
import pro1 from '../../images/Thajeev.jpg';
import pro2 from '../../images/Ram.jpg';
import pro3 from '../../images/Thatcha.jpg';
import pro4 from '../../images/sinthu.jpg';




function Team() {
    return (
        <>
        <h3 className="h3">Team Members</h3>
        <div className="card-container">
        <div className="card">
            <img className="img1" src={profile} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4><b>Thanoja</b></h4> 
            <p className="para">Web Developer</p>
            <p>
             We have many combined years of experience in this sector. 
             Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . 
            </p> 
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro1} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4 className="h4"><b>Thajeev</b></h4> 
            <p className="para">Network Engineer</p>
            <p>
             We have many combined years of experience in this sector. 
             Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . 
            </p> 
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro2} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4><b>Ramanan</b></h4> 
            <p className="para">Software Engineer</p>
            <p>
             We have many combined years of experience in this sector. 
             Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . 
            </p> 
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro3} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4><b>Thatchayini</b></h4> 
            <p className="para">Software Engineer</p>
            <p>
             We have many combined years of experience in this sector. 
             Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . 
            </p>
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro4} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4><b>Sinthusan</b></h4> 
            <p className="para">Game Engineer</p> 
            <p>
               We have many combined years of experience in this sector. 
               Trusted by clients from different corners of the globe, we pride ourselves on our customer service. . 
            </p>
            </div>
        </div>

        </div>
        </>
    )
}

export default Team;
