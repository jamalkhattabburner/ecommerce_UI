import React,  { Component } from 'react';
import "./NavBar.css"
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let {items,size,addToCart} = this.context;
        return(
            <div>
               <div className = 'navbar__component'>
                    
                    <Link to="/" ><div className='navbar__logo'></div> </Link>
                    
                    <div className='navbar__locator'>
                            <div className='navbar__locationImage'></div>
                            <div className='navbar__location'>Canada</div>
                    </div>
                    <div className='navbar__searchcomponent'>
                            <div>
                                <select className='navbar__dropdown'>
                                    <option value="All">All</option>
                                    <option value="Alexa">Alexa</option>
                                    <option value="Books">Books</option>
                                    <option value="Baby">Baby</option>
                                    <option value="Beauty">Beauty</option>
                                    <option value="Clothes">Clothes</option>
                                </select>
                            </div>
                            <div><input type='text' className='navbar__serachbox'></input></div>
                            <div className='navbar__serachboxdiv'>
                                <div className='navbar__searchicon'></div>
                            </div>
                            <div className='navbar__text navbar__signin'>
                                <div style={{fontSize: "14px"}}>Hello, Sign In</div>
                                <div style={{fontWeight: "bold"}}>Accounts & List</div>
                            </div>
                            <div className='navbar__text navbar__returns'>
                                <div style={{fontSize: "14px"}}>
                                    Returns 
                                </div>
                                <div style={{fontWeight: "bold"}}>
                                    & Order
                                </div>
                            </div>
                            <div className='navbar__text'>
                                <Link to="/checkout" className='navbar__cart app__hideLink'>
                                    <div className='cart__image'></div>
                                    <div className='cart__item'>{size}</div>
                                    <div className="navbar__text__cart">Cart</div>
                                </Link>
                            </div>
                    </div>
                </div>
                <div className = 'navbar__footer'>
                    <div className='navbar__footer_text'><Link to="/display" className='app__hideLink'>All</Link></div>
                    <div className='navbar__footer_text'>Mobile</div>
                    <div className='navbar__footer_text'>Amazon Pay</div>
                    <div className='navbar__footer_text'>Fashion</div>
                    <div className='navbar__footer_text'>Electronics</div>
                    <div className='navbar__footer_text'>Prime</div>
                    <div className='navbar__footer_text'>New Releases</div>
                    <div className='navbar__footer_text'>Customer Service</div>
                    <div className='navbar__footer_text'>Computers</div>
                    <div className='navbar__footer_text'>Home & Kitchen</div>
                    <div className='navbar__footer_downloadappimg'></div>
                </div>   
            </div>           
        );
    }
}

export default NavBar;