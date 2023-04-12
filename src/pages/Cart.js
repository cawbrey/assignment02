import {Row} from "react-bootstrap";
import {useContext} from "react";
import {ShoppingCartContext} from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
    const {cart} = useContext(ShoppingCartContext);
    const {changeCart} = useContext(ShoppingCartContext);

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

    function getTotalCost() {
        let total = 0;

        cart.filter((item) => {
            return item.quantity !== 0
        }).map((item) => (total += (item.price * item.quantity)));

        return total.toFixed(2);
    }

    return (
        <>
            <Row className="p-5">
                {getCartItems()}
                <span className={"p-2"}>
                    <h2 align={"right"}> Total: ${getTotalCost()}</h2>
                </span>
            </Row>
        </>
    );
}