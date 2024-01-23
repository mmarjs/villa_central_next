import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);    
    })

    const scroll_top = () => {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    }
  
    return (
      <div className={'ScrollTop ' + (visible ? 'ScrollTopVisible' : '')} onClick={scroll_top}>
        <FontAwesomeIcon icon={faAngleUp} className="arrow_up_icon" />
      </div>
    );
  }
  

  export default ScrollTop;