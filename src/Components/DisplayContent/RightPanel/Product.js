import React from 'react';
import "./RightPanel.css"
import Rating from '@material-ui/lab/Rating';
function Product(props) {
    return (
        <div className='product'>
            <div className='product__img'><img src ={props.definition.image} height="280px"/></div>
            <div className='product__name'>{props.definition.name}</div>
            <div className='product__rating'>
            <Rating name="read-only" value={4} style={{ fontSize : "20px"}} readOnly />
                {props.definition.rating}
            </div>
            <div className='product__price'>{props.definition.price}</div>
        </div>
    );
}
export default Product;