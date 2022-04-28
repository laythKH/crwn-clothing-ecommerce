import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import './header.style.scss';


const Header = ({ currentUser }) => (
   <div className='header'>
      <Link to={"/"} className='logo-container' >
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link className='option' to='/shop'>SHOP</Link>
         <Link className='option' to=''>CONTACT</Link>
         {
            currentUser ?
               <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
               :
               <Link className='option' to='/signin'>SIGN IN</Link>
         }
      </div>
   </div>
)

const mapStateToProps = state => ({
   currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);