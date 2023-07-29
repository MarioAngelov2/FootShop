import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import data from "../data/data.json";

import utilsStyle from "../styles/utils.module.css";
import ShoesList from "./ShoesList";
import DropdownMenu from "./DropdownMenu";
import { useFilter } from "../context/FilterContext";
import { filterProducts } from "../utils/filterProducts";
import { sortFilteredProducts } from "../utils/sortFilteredProducts";

const productsPerRow = 10;

function ShoesData() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [next, setNext] = useState(productsPerRow);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [selectetSortOption, setSelectetSortOption] = useState("");
    const { filteredData } = useFilter();

    useEffect(() => {
        const productsArray = data.shoes;
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const handleMoreProducts = () => {
        setNext(next + productsPerRow);
    };

    const handleSort = (sortedData) => {
        setSortedProducts(sortedData);
    };

    const handleSortChange = (sortOption) => {
        setSelectetSortOption(sortOption);
    };

    const filteredProducts = filterProducts(products, filteredData);

    const sortedFilteredProducts = sortFilteredProducts(
        filteredProducts,
        selectetSortOption
    );

    const productsToDisplay =
        sortedFilteredProducts.length > 0
            ? sortedFilteredProducts
            : filteredProducts.length > 0
            ? filteredProducts
            : sortedProducts.length > 0
            ? sortedProducts
            : products;

    const productsGrid = (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-3 mb-4">
            {productsToDisplay?.slice(0, next).map((product) => (
                <Col key={product.id}>
                    <ShoesList product={product} />
                </Col>
            ))}
        </Row>
    );

    const shoesList = (
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
        <>
            <DropdownMenu
                data={products}
                onSort={handleSort}
                sortMethod={handleSortChange}
            />
            {shoesList}
        </>
    );
}

export default ShoesData;
