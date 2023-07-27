import React from "react";
import { Dropdown } from "react-bootstrap";

function DropdownMenu() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline" id="dropdown-basic">
                Order by
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Alphabetical a-z</Dropdown.Item>
                <Dropdown.Item>Alphabetical z-a</Dropdown.Item>
                <Dropdown.Item>Price ascending</Dropdown.Item>
                <Dropdown.Item>Price descending</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownMenu;
