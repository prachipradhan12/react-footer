import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    
}from '@fortawesome/free-brands-svg-icons';
export default function SocialFollow(){
    return(
        <div className="social-container">
     Mail us at<br />
     <a
        href="https://youthindiafoundation.com/"
        className="gmail social"
      >contactus@youthindiafoundation.com
        
      </a>
      <br />
      <br/>
      <br/>
      
      <a
        href="https://www.youtube.com/"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      {/* </center> */}
    </div>
    );
}