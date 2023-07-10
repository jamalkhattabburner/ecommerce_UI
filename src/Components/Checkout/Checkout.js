import React, { useContext } from 'react';
import "./Checkout.css";
import Grid from "@material-ui/core/Grid";
import CheckoutItems from "./CheckoutItems";
import { CartContext } from '../CartContext/CartContext';


function Checkout(props) {
    const {items,size,addToCart} = useContext(CartContext);

    const cartValue = function() {
        let price=0;
        for(let i=0;i<items.length;i++){
            price += parseInt(items[i].price);
        }
        return price != 0 ? price: "";
    }

    return (
        <div className="checkout__body">
            <Grid container>
                <Grid item={10}>
                    <div className = "checkout__container">
                        <div style={{fontSize: "30px" , fontWeight: "500" , padding : "20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div>
                            { 
                                items.length > 0 ?
                                    items.map( (value) => (
                                        <CheckoutItems definition={value} />
                                    ))
                                    : <div style={{height: "100vh", margin: "30px" }}> Please buy something</div>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item={2}>
                    <div style={{ width: "300px", height:"200px", padding: "20px", marginTop: "25px", backgroundColor: "white"}}>
                        <div style={{ fontSize: "26px"}}>Subtotal ({size} items): <strong>{cartValue()}</strong></div>
                        <div style={{paddingTop : "25px "}}>
                            <button className="checkout__button">Proceed to buy</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Checkout;