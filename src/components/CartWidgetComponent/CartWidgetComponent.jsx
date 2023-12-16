import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

CartContext

useContext
const CartWidgetComponent = () => {

    const { itemCount } = useContext(CartContext);

    return (
        <div style={{color:"white"}}>
            <FontAwesomeIcon icon={faCartShopping} style={{paddingRight: "0.8em", fontSize:"1.1em"}}/>
            <span style={{fontWeight:700}}>{itemCount}</span>
        </div>
    )
}

export default CartWidgetComponent