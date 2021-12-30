import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import '../../components/Navbar/Navbar.css';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
           
            <Link to = '/' className= "navbar-logo">
              <i className="fab fa-artstation"></i>
            </Link>

            <div className="footer-content">
              <div>
                <p>Our fantastic team of professional designers is here to help.

                    Committed to producing high-quality but low-cost goods

                    graphic design merchandise</p><br />
              </div>
              <div>
                <h4>SERVICE SUPPORT</h4><br />
                <p>Tuesday - Thursday: 8:00 a.m.–22:00 p.m</p>
                <p>Saturday - Sunday: 12:00 p.m.–5:00 p.m</p>
              </div>
              <div><br />
                <h4>CUSTOMER SERVICE</h4><br />
                <p>
                 Help Centre
                </p>
                <p>
                 Delivery Offer
                </p>
                <p>
                 Returns Policy
                </p>
                <p>
                 Product Recalls
                </p>
                <p>
                 Scam Warnings
                </p>
                <p>
                 Track Your Order
                </p><br />
                <hr />
              </div>
              <div className="footer-bg"><br />
                <p>Copyright © 2021 ThanoInnovate</p>
                <p>All rights reserved</p>
                <p>Design by: ThanojaInnovate.com</p>
              </div>
              </div>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;