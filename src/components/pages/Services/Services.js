import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Services.css';

function Contact() {
    return (
        <>
        <div className="header">
         <Navbar />

            <h2 className="about-h2">Services</h2>

            <h4 className="service-h4">We provide a complete range of printing services, encompassing a variety of media</h4>
            
        </div>
       
        <section class="card-product1">

           <img src="https://images.pexels.com/photos/8534251/pexels-photo-8534251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="service-img" />
           
           <div class="card-product1-infos">
               <h3>Business Card Printing</h3>
               <p>
                  Don’t leave the success of your business cards to chance.
                  Your business card is so unique as it defines who you are. There might be a million business card designs but only one is perfect for you. We provide a competitively priced business card printing service that imparts them with the glint they deserve.
               </p>
           </div>

        </section>

        <section class="card-product1">

           <div class="card-product1-infos">
               <h3>Digital Printing</h3>
               <p>
                 For digital printing that hits the spot every time!
                 For digital printing that hits the spot every time, we’ve got it covered. Whether it’s black & white or vibrant full colour, our digital print machines are up to the task, outputting punchy, professional-looking material. You’ll be thrilled with the results!
               </p>
           </div>
           <img src="https://images.pexels.com/photos/6177652/pexels-photo-6177652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="service-img" />

        </section>

        <section class="card-product1">

        <img src="https://images.pexels.com/photos/4439442/pexels-photo-4439442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="service-img" />

           <div class="card-product1-infos">
               <h3>Flyer Printing</h3>
               <p>
                Flyer printing that will suit your budget and exceed your expectations.
                Your flyer is judged so fast it’s either thrown into the bin or treasured for a long time. The London Printing Company offers a professional flyer printing service that transforms promotional material into seductive treasures.
               </p>
           </div>

        </section>

        <section class="card-product1">
           <div class="card-product1-infos">
               <h3>Leaflet Printing</h3>
               <p>
                 For Leaflet printing that hits the spot every time!
                 For Leaflet printing that hits the spot every time, we’ve got it covered. Whether it’s black & white or vibrant full colour, our digital print machines are up to the task, outputting punchy, professional-looking material. You’ll be thrilled with the results!
               </p>
           </div>
           <img src="https://images.pexels.com/photos/4551157/pexels-photo-4551157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="service-img" />

        </section>

        <section class="card-product1">

        <img src="https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="service-img" />

           <div class="card-product1-infos">
               <h3>T-Shirt Printing</h3>
               <p>
                 For T-shirt printing that hits the spot every time!
                 For T-shirt printing that hits the spot every time, we’ve got it covered. Whether it’s black & white or vibrant full colour, our digital print machines are up to the task, outputting punchy, professional-looking material. You’ll be thrilled with the results!
               </p>
           </div>

        </section>
        
        <Footer />
        </>

    )
}

export default Contact;
