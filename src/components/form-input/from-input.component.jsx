import React from 'react';

import './form-input.style.scss';



const FromInput = ({ handleChange, label, ...otherProps }) => (
   <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
         label ?
            (<label className={`${otherProps.value.input ? 'shrink' : ''} form-input-label`}>
               {label}
            </label>)
            : null
      }
   </div>
);

export default FromInput;