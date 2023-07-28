import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import data from "../data/data.json";

import utilsStyle from "../styles/utils.module.css";
import BagsList from "./BagsList";
import DropdownMenu from "./DropdownMenu";

const productsPerRow = 10;

function BagsData() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [next, setNext] = useState(productsPerRow);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        const productsArray = data.bags;
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const handleMoreProducts = () => {
        setNext(next + productsPerRow);
    };

    const handleSort = (sortedData) => {
        setSortedProducts(sortedData);
    };

    const productsToDisplay =
        sortedProducts.length > 0 ? sortedProducts : products;

    const productsGrid = (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-3 mb-4">
            {productsToDisplay?.slice(0, next).map((product) => (
                <Col key={product.id}>
                    <BagsList product={product} />
                </Col>
            ))}
        </Row>
    );

    const bagsList = (
        <>
            {productsToDisplay.length > 0 ? (
                productsGrid
            ) : (
                <h4>No products to show</h4>
            )}
            <div
                className={`${utilsStyle.blockCenter} ${utilsStyle.flexCenter}`}
            >
                <Button
                    onClick={handleMoreProducts}
                    variant="outline-dark"
                    className="mt-3 mb-5"
                >
                    Load More
                </Button>
            </div>
        </>
    );
    return (
        <div>
            <DropdownMenu data={products} onSort={handleSort} />
            {bagsList}
        </div>
    );
}

export default BagsData;
