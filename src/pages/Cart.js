import {Row} from "react-bootstrap";
import {useContext} from "react";
import {ShoppingCartContext} from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";

export default function Cart(){
    const {cart} = useContext(ShoppingCartContext);
    const {changeCart} = useContext(ShoppingCartContext);
    console.log(cart);

    function setQuantity(item, newQuantity){
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
        });

        changeCart(updatedCart);
    }


    function getQuantitiesItems(){
        return cart.filter((item) => {return item.quantity !== 0}).map((item) => (CartItem(item, (newQuantity) => setQuantity(item, newQuantity))))
    }

    return (
        <>
            <Row className="p-5">
                {getQuantitiesItems()}
            </Row>
        </>
    );
}