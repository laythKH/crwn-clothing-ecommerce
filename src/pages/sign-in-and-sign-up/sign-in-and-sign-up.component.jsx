import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SginUp from '../../components/sign-up/sign-up.component';


import './sign-in-and-sign-up.style.scss';

const SignInAndSignUpPage = () => (
   <div className='sign-in-and-sign-up'>
      <SignIn />
      <SginUp />
   </div>
);


export default SignInAndSignUpPage;