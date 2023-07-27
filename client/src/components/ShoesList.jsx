import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import style from "../styles/Product.module.css";
import utilStyle from "../styles/utils.module.css";
import { Rating } from "react-simple-star-rating";

function ShoesList({ product }) {
    const [showAlert, setShowAlert] = useState(false);

    const handleAlert = () => {
        setShowAlert(true);
    };

    return (
        <Card className={style.productCard}>
            <Card.Header className={style.cardHeader}>
                {product.title}
            </Card.Header>
            <Card.Img
                variant="top"
                src={product.image}
                className={style.imageStyle}
            />
            <Card.Body className={style.cardBody}>
                <Card.Text className="text-muted">
                    {product.description}
                </Card.Text>
                <div className={utilStyle.flexGapBetween}>
                    <span>{product.price} BGN</span>
                    <Rating size={23} />
                </div>
                <div>
                    {showAlert ? (
                        <Alert
                            className={`${style.alertPopup} mt-3 mb-2`}
                            variant="success"
                            onClose={() => setShowAlert(false)}
                        >
                            Product added to cart
                        </Alert>
                    ) : (
                        <Button
                            onClick={handleAlert}
                            variant="outline-dark"
                            className="mt-4"
                        >
                            Add to cart
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ShoesList;
