import {Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {useContext} from "react";
import {ShoppingCartContext} from "../context/ShoppingCartContext";

export default function Browse() {
    const {cart} = useContext(ShoppingCartContext);
    const {changeCart} = useContext(ShoppingCartContext);
    console.log(cart);

    function setQuantity(item, newQuantity) {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {...cartItem, quantity: newQuantity};
            }
            return cartItem;
        });

        changeCart(updatedCart);
    };

    return (
        <>
            <div className="input-group rounded pt-5 px-5" >
                <input type="search" className="form-control rounded" placeholder="Search"/>
                <span className="input-group-text border-0">
                    <img src="./search.svg" alt=""/>
                </span>
            </div>

            <Row sm={1} md={2} lg={3} xxl={4} className="p-5">


                {cart.map((item) => (
                    StoreItem(item, (newQuantity) => setQuantity(item, newQuantity))
                ))}
            </Row>
        </>
    );
}