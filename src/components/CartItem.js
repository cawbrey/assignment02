import {Button, Card} from "react-bootstrap";

export default function CartItem(item, setQuantity) {

    const {price, image, quantity} = item;

    return (
        <div className="d-table-row p-1">
            <Card className="shadow-sm rounded-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Img src={image} variant={"left"} height="100px"></Card.Img>
                        <Card.Title>{item.title}</Card.Title>
                        <div className="mt-auto justify-content-end">
                            <h3>${(quantity * price).toFixed(2)}</h3>

                            <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                                <div className="d-flex align-items-center justify-content-center"
                                     style={{gap: ".5rem"}}>
                                    <Button onClick={() => {
                                        setQuantity(quantity - 1);
                                    }}> - </Button>
                                    <div>{quantity}</div>
                                    <Button onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}> + </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}