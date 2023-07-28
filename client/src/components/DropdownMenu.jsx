import React from "react";
import { Dropdown } from "react-bootstrap";
import utilStyle from "../styles/utils.module.css";

function DropdownMenu({ data, onSort }) {
    const handleSortChange = (eventKey) => {
        if (eventKey === "alphabeticalAZ") {
            let sortedData = [...data].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            onSort(sortedData);
        } else if (eventKey === "alphabeticalZA") {
            let sortedData = [...data].sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            onSort(sortedData);
        } else if (eventKey === "lowestPrice") {
            let sortedData = [...data].sort((a, b) => a.price - b.price);
            onSort(sortedData);
        } else if (eventKey === "highestPrice") {
            let sortedData = [...data].sort((a, b) => b.price - a.price);
            onSort(sortedData);
        }
    };

    return (
        <Dropdown onSelect={handleSortChange}>
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
        </Dropdown>
    );
}

export default DropdownMenu;
