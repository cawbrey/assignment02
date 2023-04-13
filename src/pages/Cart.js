import {Row} from "react-bootstrap";
import {useContext} from "react";
import {ShoppingCartContext} from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";
import PaymentInformation from "../components/PaymentInformation";

export default function Cart() {
    const {cart, changeCart} = useContext(ShoppingCartContext);

    function setQuantity(item, newQuantity) {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {...cartItem, quantity: newQuantity};
            }
            return cartItem;
        });

        changeCart(updatedCart);
    }


    function getCartItems() {
        return cart.filter((item) => {
            return item.quantity !== 0
        }).map((item) => (CartItem(item, (newQuantity) => setQuantity(item, newQuantity))))
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

    return (
        <>
            <Row className="p-5">
                {getCartItems()}
                <span className={"p-2"}>
                    <h4 align={"right"}> Cost: {getCost()}</h4>
                    <br/>
                    <h3 align={"right"}> Total(Cost + Tax): ${getTotalCost()}</h3>
                </span>
            </Row>

            <Row className="p-5">
                <PaymentInformation/>
            </Row>
        </>
    );
}