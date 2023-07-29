import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import data from "../../data/data.json";

import utilsStyle from "../../styles/utils.module.css";
import ShoesList from "./ShoesList";
import DropdownMenu from "../Dropdown/DropdownMenu";
import { useFilter } from "../../context/FilterContext";
import { filterProducts } from "../../utils/filterProducts";
import { sortFilteredProducts } from "../../utils/sortFilteredProducts";

const PRODUCTS_PER_LOAD = 10;

function ShoesData() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [displayedProductsCount, setDisplayedProductsCount] =
        useState(PRODUCTS_PER_LOAD);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [selectetSortOption, setSelectetSortOption] = useState("");
    const { filteredData } = useFilter();

    useEffect(() => {
        const productsArray = data.shoes;
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const handleMoreProducts = () => {
        setDisplayedProductsCount(displayedProductsCount + PRODUCTS_PER_LOAD);
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
            {productsToDisplay
                ?.slice(0, displayedProductsCount)
                .map((product) => (
                    <Col key={product.id}>
                        <ShoesList product={product} />
                    </Col>
                ))}
        </Row>
    );

    if (productsToDisplay && dataLoaded) {
        if (displayedProductsCount > products.length) {
            setDisplayedProductsCount(products.length);
        }
    }

    const numberOfProductsDisplayed = (
        <>
            {productsToDisplay.length > 0 ? (
                <span>
                    {displayedProductsCount} of {products.length} products
                </span>
            ) : null}
        </>
    );

    const displayButton = (
        <div className={`${utilsStyle.blockCenter} ${utilsStyle.flexCenter}`}>
            {displayedProductsCount < productsToDisplay.length ? (
                <Button
                    onClick={handleMoreProducts}
                    variant="outline-dark"
                    className="mt-3 mb-5"
                >
                    Load More
                </Button>
            ) : null}
        </div>
    );

    const shoesList = (
        <>
            {productsToDisplay.length > 0 ? (
                productsGrid
            ) : (
                <h4>No products to show</h4>
            )}
            {displayButton}
        </>
    );

    return (
        <>
            <DropdownMenu
                data={products}
                onSort={handleSort}
                sortMethod={handleSortChange}
                numberOfProductsDisplayed={numberOfProductsDisplayed}
            />
            {shoesList}
        </>
    );
}

export default ShoesData;
