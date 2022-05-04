import Header from '../../components/header/header.component';

import { Outlet } from 'react-router-dom';


function SharedLayout() {
   return (
      <div>
         <Header />
         <Outlet />
      </div>
   )
}

export default SharedLayout;