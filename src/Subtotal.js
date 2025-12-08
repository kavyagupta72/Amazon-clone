import React from 'react'
import './Subtotal.css';
import {NumericFormat} from 'react-number-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './Reducer';


function Subtotal() {
  const [{basket}, dispatch] = useStateValue();   //data layer
  return (
    <div className = 'subtotal'>
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rs. '}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} Items): <strong>{value}</strong>
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
