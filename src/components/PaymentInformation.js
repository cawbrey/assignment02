import {useContext, useState} from "react";
import {Button, Card, Row} from "react-bootstrap";
import {ShoppingCartContext} from "../context/ShoppingCartContext";
import Confirmation from "../pages/Confirmation";

export default function PaymentInformation() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const {changePage} = useContext(ShoppingCartContext);


    function formValidation() {
        let curRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (!curRegex.test(fullName) && fullName !== "") {
            return "Invalid Name detected";
        }

        curRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!curRegex.test(email) && email !== "") {
            return "Invalid email detected"
        }

        curRegex = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;
        if (!curRegex.test(cardNumber) && cardNumber !== "") {
            return "Invalid Card Number";
        }

        curRegex = /^\d+\s+([a-zA-Z]+\s+)*[a-zA-Z]+\.?\s+\w{2,}$/;
        if (!curRegex.test(address1) && address1 !== "") {
            return "Invalid Address";
        }

        curRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        if (!curRegex.test(city) && city !== "") {
            return "Invalid City";
        }

        if (!curRegex.test(state) && state !== "") {
            return "Invalid State";
        }

        curRegex = /^\d{5}(?:[-\s]\d{4})?$/;
        if (!curRegex.test(zipCode) && zipCode !== "") {
            return "Invalid Zip Code";
        }


        return "";
    }

    function order() {
        if (formValidation() !== "") {
            return;
        }

        console.log("tried to change page")
        changePage(Confirmation());
    }

    return (<>
        <Card className="p-1">
            <Card.Title className="m-2 p-1">Customer Information</Card.Title>

            <Card.Title className="m-2 p-1" style={{color: "#ff6363"}}>{formValidation()}</Card.Title>

            <Card.Body className="m-2">
                <Row className="p-1">
                    <input type="text" className="form-control rounded p-1" placeholder="Full Name" value={fullName}
                           onChange={(e) => setFullName(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="email" className="form-control rounded p-1" placeholder="Email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="text" className="form-control rounded p-1" placeholder="Payment Card"
                           value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="text" className="form-control rounded p-1" placeholder="Address 1" value={address1}
                           onChange={(e) => setAddress1(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="text" className="form-control rounded p-1" placeholder="Address 2 (optional)"
                           value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="text" className="form-control rounded p-1" placeholder="City" value={city}
                           onChange={(e) => setCity(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="text" className="form-control rounded p-1" placeholder="State" value={state}
                           onChange={(e) => setState(e.target.value)}/>
                </Row>
                <Row className="p-1">
                    <input type="number" className="form-control rounded p-1" placeholder="Zip Code" value={zipCode}
                           onChange={(e) => setZipCode(e.target.value)}/>
                </Row>
            </Card.Body>
            <Button className="m-2 p-1" onClick={() => order()}> Submit Order </Button>
        </Card>
    </>);

}