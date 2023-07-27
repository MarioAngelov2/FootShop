import React from "react";
import { Card, Image } from "react-bootstrap";
import style from '../styles/Product.module.css'

function Products({ product }) {
    return (
        <Card className={style.productCard}>
            <Card.Body className={style.cardBody}>
                <Card.Header className={style.cardHeader}>{product.title}</Card.Header>
                <Card.Img
                    variant="top"
                    src={product.image}
                    className={style.imageStyle}
                />
                <Card.Text className="text-muted">{product.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Products;
