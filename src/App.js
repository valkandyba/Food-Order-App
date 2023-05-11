import React, { useState } from "react";

import CartProvider from "./store/CartProvider";

import Header from "./conponents/Layout/Header";
import Meals from "./conponents/Meals/Meals";
import Cart from "./conponents/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            { cartIsShown && <Cart onClose={hideCartHandler} /> }
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
