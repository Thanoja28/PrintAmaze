import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function Contact() {
    return (
        <>
        <div className="header">
         <Navbar />

            <h2 className="about-h2">Services</h2>
            
        </div>
       
        <section class="card-product1">
           <img src="https://images.pexels.com/photos/5727002/pexels-photo-5727002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="about" />
           <div class="card-product1-infos">
           </div>
        </section>

        <Footer />
        </>

    )
}

export default Contact;
