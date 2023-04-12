import {useState} from "react";
import Browse from "./Browse";
import Cart from "./Cart";
import {ShoppingCartContext} from "../context/ShoppingCartContext";
import products from "../data/products.json";

export default function App() {
    let [activePage, changePage] = useState(<Browse />);
    let [cart, changeCart] = useState(products);



    function getNumInCart(){
        let quantity = 0;
        cart.filter((item) => {return item.quantity !== 0}).map((item) => (quantity += item.quantity));
        return quantity;
    }


    
    return (
    <>
        <nav className="nav">
            <ul>
                    <button onClick={() => {changePage(<Browse />)}} type="button" className="btn" >Browse</button>
                    <button onClick={() => {changePage(<Cart />)}} type="button" className="btn"><img src="./shoppingCart.svg" alt="shopping cart"/> {getNumInCart()}</button>
            </ul>
        </nav>


        <ShoppingCartContext.Provider value={{cart, changeCart}}>
            {activePage}
        </ShoppingCartContext.Provider>


    </>
    );
}