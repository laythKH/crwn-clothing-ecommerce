import React from "react";


import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './menu-item.style.scss';

// const location = useLocation();

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
   const Navigater = useNavigate()

   const location = useLocation();

   return (
      <div className={`${size} menu-item`} onClick={() => Navigater(`${location.pathname}${linkUrl}`)}>
         <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
         <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="title">SHOP NOW</span>
         </div>
      </div>
   )
};


export default MenuItem;