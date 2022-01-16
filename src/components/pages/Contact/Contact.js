import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Contact.css';

function Contact() {
    return (
        <>
        <div className="header">
         <Navbar />
            <h2 className="about-h2">Contact Us</h2>
        </div>
       
        <section class="card-product2">
          <img className="card-img" src="https://media.istockphoto.com/photos/outdoor-yellow-atm-automated-teller-machine-payment-terminal-isolated-picture-id1198716082?k=20&m=1198716082&s=612x612&w=0&h=u8_bEMIBsVxXXgbKqljEmJ2E6Kav676TujKbrUYacSM=" alt="card-img" />
           <div className="Align-Ring">
             <h2>Ring Me:</h2>
             <p>07305232145</p>
              <h4>Email:</h4>
              <p>printAmaze@yahoo.co.uk</p>
              <h4>Location:</h4>
              <p>149 cheapside</p>
              <p>E6 2NF</p>
           </div>
           
           <form action="/action_page.php" className="form-contact">
               <h2>Contact Us</h2>
               <p><i>We will get back to you asap!</i></p>
                 <input className="input-form" type="text" id="fname" name="fname" placeholder="First Name" /><br />
                 <input className="input-form" type="text" id="email" name="email" placeholder="Email" /><br />
                 <input className="input-form" type="text" id="phone" name="phone" placeholder="phone" /><br />
                 <textarea className="input-form" type="text" id="Message" name="Message" placeholder="Enter your Message here" /><br />
                 <input className="btn-send" type="submit" value="Send" />
            </form>
        </section>
        <Footer />
        </>
    )
}

export default Contact;
