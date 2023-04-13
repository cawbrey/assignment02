import {ShoppingCartContext} from "../context/ShoppingCartContext";
import {useContext} from "react";
import {Button, Row} from "react-bootstrap";
import products from "../data/products.json";
import Browse from "./Browse";

export default function Confirmation() {
    const {cart, changeCart, changePage} = useContext(ShoppingCartContext);


    function makeItem(item){
        return(
            <span className="p-5">
                <p align={"left"}>{item.title}</p>
                <p align={"right"}>{item.quantity} x {item.price} = ${(item.price * item.quantity).toFixed(2)}</p>
            </span>
        );
    }
    function getCartItems() {
        return cart.filter((item) => {
            return item.quantity !== 0
        }).map((item) => (makeItem(item)))
    }
    function getCost() {
        let total = 0.00;

        cart.filter((item) => {
            return item.quantity !== 0
        }).map((item) => (total += (item.price * item.quantity)));

        return total.toFixed(2);
    }
    function getTotalCost(){
        return (getCost() * 1.07).toFixed(2);
    }

    function returnButton(){
        changeCart(products);
        changePage(<Browse></Browse>)
    }

    return <>
        <div className="mx-auto p-5" style={{ maxWidth: '700px' }}>
            <Button onClick={() => returnButton()}>{"<-Return"}</Button>
            <Row className="mx-auto">
                <h1>Order Summary</h1>

                {getCartItems()}
                <span>
                    <h3 align={"right"}>Total Cost: ${getTotalCost()}</h3>
                </span>

            </Row>
        </div>
    </>
}