import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);

        let existingCart = localStorage.getItem('cart') != undefined ? JSON.parse(localStorage.getItem('cart')) : [];
        let cartSize = existingCart.length;

        this.state = { 
            items: existingCart,
            size: cartSize,
            addToCart: (newItem) => {
                let itemList = this.state.items;
                itemList.push(newItem);

                this.setState( { items: itemList } );
                this.setState( { size: this.state.items.length });

                this.state.saveToLocalCache();
            },
            saveToLocalCache: ()=>{
                localStorage.setItem('cart', JSON.stringify(this.state.items));
            },
            removeFromCart:(id) => {
                let itemList = this.state.items;
                const indexToRemove = itemList.findIndex(item => item.id === id);

                if (indexToRemove !== -1) {
                    itemList.splice(indexToRemove, 1);
                }

                this.setState( { items: itemList } );
                this.setState( { size: this.state.items.length });
                this.state.saveToLocalCache();
            }
         }
    }
    render() { 
        return ( 
            <CartContext.Provider value={{ ...this.state, ...this.addToCart,  ...this.removeFromCart }} >
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider;