import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import data from "../data/data.json";

import utilsStyle from "../styles/utils.module.css";

import ShoesList from "./ShoesList";

function ShoesData() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const productsArray = data.shoes;
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const productsGrid = (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-3 mb-4">
            {products.map((product) => (
                <Col key={product.id}>
                    <ShoesList product={product} />
                </Col>
            ))}
        </Row>
    );

    const homePage = (
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
    return <>{homePage}</>;
}

export default ShoesData;
