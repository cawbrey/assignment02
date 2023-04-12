import {Button, Card} from "react-bootstrap";

export default function StoreItem(item, setQuantity){

    const { id, title, price, description, category, image, rating, quantity} = item;
    
    return(
        <div className="d-grid col-md-6 col-lg-5 col-xl-3 p-1">
            <Card className="shadow-sm rounded-3">
                <Card.Img src={image} variant={"top"} height="200px" style={{objectFit: "contain"}}></Card.Img>

                <Card.Body>
                    <Card.Title className="fw-bold"><p>{title}</p></Card.Title>
                    <Card.Text className="font-weight-light">{description}</Card.Text>
                </Card.Body>

                <Card.Footer>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="fw-bolder">${price}</small>
                        <div className="mt-auto justify-content-end">
                            { quantity !== 0 ?
                                (<div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                                    <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                        <Button onClick={() => {
                                            setQuantity(quantity - 1);
                                        }}> - </Button>
                                        <div>{quantity}</div>
                                        <Button onClick={() => {
                                            setQuantity(quantity + 1);
                                        }}> + </Button>
                                    </div>
                                </div>):
                                (<Button onClick={() => {
                                    setQuantity(1);
                                }}>Add to Cart</Button>)
                            }
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    );
}