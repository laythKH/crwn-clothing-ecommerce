import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss'

const CartDropdown = ({ cartItems, dispatch }) => {
   const navigate = useNavigate()
   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {cartItems.length ?
               (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) :
               <span className='empty-message'>your cart is empty</span>
            }
         </div>
         <CustomButton
            onClick={() => {
               navigate('/checkout');
               dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
      </div>
   )
}

const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)