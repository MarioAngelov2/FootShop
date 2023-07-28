import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import data from "../data/data.json";

import utilsStyle from "../styles/utils.module.css";
import BagsList from "./BagsList";
import DropdownMenu from "./DropdownMenu";
import { useFilter } from "../context/FilterContext";
import { filterProducts } from "../utils/filterProducts";
import { sortFilteredProducts } from "../utils/sortFilteredProducts";

const PRODUCTS_PER_LOAD = 10;

function BagsData() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [next, setNext] = useState(PRODUCTS_PER_LOAD);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [selectetSortOption, setSelectetSortOption] = useState("");
    const { filteredData } = useFilter();

    useEffect(() => {
        const productsArray = data.bags;
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const handleMoreProducts = () => {
        setNext(next + PRODUCTS_PER_LOAD);
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
            <DropdownMenu
                data={products}
                onSort={handleSort}
                sortMethod={handleSortChange}
            />
            {bagsList}
        </div>
    );
}

export default BagsData;
