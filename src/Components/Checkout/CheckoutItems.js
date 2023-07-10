import React,{ useContext }  from 'react';
import "./Checkout.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
function CheckoutItems(props) {

  const {removeFromCart} = useContext(CartContext);
  const removeCart = function() {
    removeFromCart(props.definition.id);
}

return (
      <div>
          <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
              <div style={{margin: "25px"}}>
                <Link to={"/product/" + props.definition.id} className="app__hideLink">
                  <img height="200px" src={props.definition.image} />
                </Link>
              </div>
              <div style={{ marginTop: "20px"}}>
                  <Link to={"/product/" + props.definition.id } className="app__hideLink">
                      <div style={{fontSize: "20px"}} className="textgap">{props.definition.name}</div>
                  </Link>
                  <div style={{ fontWeight: "bold"}} className="textgap">{props.definition.price}</div>
                  <div className="textgap">{props.definition.status}</div>
                  <div className="textgap"><a href="" onClick={removeCart}>Delete</a></div>
              </div>
          </div>
      </div>
  );
}

export default CheckoutItems;