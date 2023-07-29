import React from "react";
import { Dropdown } from "react-bootstrap";
import utilStyle from "../../styles/utils.module.css";

function DropdownMenu({ data, onSort, sortMethod, numberOfProductsDisplayed }) {
    const handleSortChange = (eventKey) => {
        if (eventKey === "alphabeticalAZ") {
            let sortedData = [...data].sort((a, b) =>
                a.title.localeCompare(b.title)
            );

            sortMethod(eventKey);
            onSort(sortedData);
        } else if (eventKey === "alphabeticalZA") {
            let sortedData = [...data].sort((a, b) =>
                b.title.localeCompare(a.title)
            );

            sortMethod(eventKey);
            onSort(sortedData);
        } else if (eventKey === "lowestPrice") {
            let sortedData = [...data].sort((a, b) => a.price - b.price);

            sortMethod(eventKey);
            onSort(sortedData);
        } else if (eventKey === "highestPrice") {
            let sortedData = [...data].sort((a, b) => b.price - a.price);

            sortMethod(eventKey);
            onSort(sortedData);
        }
    };

    return (
        <Dropdown onSelect={handleSortChange} className={utilStyle.flexGapBetween}>
            <Dropdown.Toggle variant="outline" id="dropdown-basic">
                Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu className={`${utilStyle.fontSize}`}>
                <Dropdown.Item className="mb-2 mt-1" eventKey="alphabeticalAZ">
                    Alphabetical A-Z
                </Dropdown.Item>
                <Dropdown.Item className="mb-2" eventKey="alphabeticalZA">
                    Alphabetical Z-A
                </Dropdown.Item>
                <Dropdown.Item className="mb-2" eventKey="lowestPrice">
                    Lowest price
                </Dropdown.Item>
                <Dropdown.Item className="mb-2" eventKey="highestPrice">
                    Highest price
                </Dropdown.Item>
            </Dropdown.Menu>
            {numberOfProductsDisplayed}
        </Dropdown>
    );
}

export default DropdownMenu;
