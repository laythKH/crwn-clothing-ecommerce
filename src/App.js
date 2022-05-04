import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import { auth, db } from './firebase/firebase.utils';
import { doc, onSnapshot } from 'firebase/firestore';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import CollectionPage from './pages/collection/collection.component';
import SharedLayout from './pages/sharedLayout/sharedLayout.component';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if (userAuth) {
        // const userRef = createUserProfileDocument(userAuth)
        // console.log(userRef)
        onSnapshot(doc(db, "users", userAuth.uid), (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // console.log(snapShot.data())
        });
        // console.log(userAuth)
      }
      else {
        setCurrentUser(userAuth);
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={<HomePage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='shop/:collectionId' element={<CollectionPage />} />
            <Route path='checkout' element={<CheckoutPage />} />
            <Route path='signin' element={this.props.currentUser ? <Navigate to='/' replace /> : <SignInAndSignUpPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// render() {
//   return (
//     <div className="App">
//       <Header />
//       <HashRouter basename='/'>
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='/shop' element={<ShopPage />} />
//           <Route path='/shop/:collectionId' element={<CollectionPage />} />
//           <Route path='checkout' element={<CheckoutPage />} />
//           <Route path='signin' element={this.props.currentUser ? <Navigate to='/' replace /> : <SignInAndSignUpPage />} />
//         </Routes>
//       </HashRouter>
//     </div>
//   );
// }
