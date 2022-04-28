import React from 'react';

import FromInput from '../form-input/from-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, sginInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.style.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';

class SignIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = async (event) => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
         await signInWithEmailAndPassword(auth, email, password);
         this.setState({ email: '', password: '' })
      } catch (error) {
         console.log(error);
      }

   }

   handleChange = event => {
      const { value, name } = event.target;


      this.setState({ [name]: value })
   }


   render() {
      return (
         <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with you email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FromInput
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  value={this.state.email}
                  label='email'
                  required
               />
               <FromInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  required
                  label='password'
                  handleChange={this.handleChange}
               />
               <div className='buttons'>
                  <CustomButton type='submit'>Sign in</CustomButton>
                  <CustomButton onClick={sginInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
               </div>
            </form>
         </div>
      )
   }
}



export default SignIn;