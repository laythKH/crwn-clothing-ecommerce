import React from "react";

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51KvM5wFBtMjWgipQBR8d4hl8RZBMwcoff05l5y9fty7yGEPKKGUCgPZmJpYb4P8QMhmXDdESC9RCohy59P0DlImi00NWu8v1fP'

   const onToken = token => {
      console.log(token)
      alert('Payment Successful')
   }

   return (
      <StripeCheckout
         label='Pay Now'
         name='CROWN Clothing'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your Total is ${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
      />
   );
}

export default StripeCheckoutButton;