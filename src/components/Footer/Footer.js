import React from 'react';
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>PrintAmaze</SocialLogo>
            <div className="footer-content">
              <div>
                <p>Our fantastic team of professional designers is here to help.

                committed to producing high-quality but low-cost goods

                graphic design merchandise</p><br />
              </div>
              <div>
                <h4>SERVICE SUPPORT</h4><br />
                <p>Tuesday - Thursday: 8:00 a.m.–22:00 p.m</p>
                <p>Saturday - Sunday: 12:00 p.m.–5:00 p.m</p>
              </div>
              <div><br />
                <h3>CUSTOMER SERVICE</h3><br />
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
                </p>
              </div>
              <div className="footer-bg"><br />
                <p>Copyright © 2021 ThanoInnovate</p>
                <p>All rights reserved</p>
                <p>Design by: Thanojainnovate.com</p>
              </div>
              </div>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com/briandesignz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;