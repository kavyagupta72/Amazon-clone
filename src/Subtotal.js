import React from 'react'
import './Subtotal.css';
import {NumericFormat} from 'react-number-format';


function Subtotal() {
  return (
    <div className = 'subtotal'>
      <NumericFormat
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rs. '}
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 Items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button> 
    </div>
  )
}

export default Subtotal
