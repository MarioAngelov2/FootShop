import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import data from "../data/data.json";

import utilsStyle from "../styles/utils.module.css";
import BagsList from "./BagsList";

function BagsData() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const productsArray = data.bags;
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const productsGrid = (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-3 mb-4">
            {products.map((product) => (
                <Col key={product.id}>
                    <BagsList product={product} />
                </Col>
            ))}
        </Row>
    );

    const bagsList = (
        <>
            {products.length > 0 ? productsGrid : <h4>No products to show</h4>}
            <div
                className={`${utilsStyle.blockCenter} ${utilsStyle.flexCenter}`}
            >
                <Button variant="outline-dark" className="mt-3 mb-5">
                    Load More
                </Button>
            </div>
        </>
    );
    return <div>{bagsList}</div>;
}

export default BagsData;
