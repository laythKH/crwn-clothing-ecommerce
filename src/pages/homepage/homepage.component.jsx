import React from "react";

import './homepage.style.scss';

import Directory from "../../components/directory/directory.component";

import { useLocation } from 'react-router-dom';


const HomePage = () => {
   return (
      <div className="homepage">
         <Directory />
      </div>
   )
}
export default HomePage;

// homePage => Directory => menu-item