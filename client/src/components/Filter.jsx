import React from "react";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { MDBCheckbox } from "mdb-react-ui-kit";
import utilStyle from "../styles/utils.module.css";
import { useFilter } from "../context/FilterContext";

function Filter() {
    const { filteredData, setFilteredData } = useFilter();

    const handlePriceRangeChange = (event) => {
        const { name, checked } = event.target;
        setFilteredData((prevPrice) => ({
            ...prevPrice,
            selectPriceRange: {
                ...prevPrice.selectPriceRange,
                [name]: checked,
            },
        }));
    };

    // const handleColorChange = (event) => {
    //     const { name, checked } = event.target;
    //     setSelectColor((prevColor) => ({
    //         ...prevColor,
    //         [name]: checked,
    //     }));
    // };

    return (
        <Row className={utilStyle.fontSize}>
            <Col className={`${utilStyle.marginTop}`} md={2}>
                <div className="d-none d-md-block">
                    <div>
                        <h6 className="mb-4">Price</h6>
                        <MDBCheckbox
                            name="all"
                            id="all1"
                            label="All"
                            checked={filteredData.selectPriceRange.all}
                            onChange={(event) =>
                                handlePriceRangeChange(event)
                            }
                        />
                        <MDBCheckbox
                            name="lowerRange"
                            id="lowerRange1"
                            label="0 - 50 BGN"
                            checked={filteredData.selectPriceRange.lowerRange}
                            onChange={(event) =>
                                handlePriceRangeChange(event)
                            }
                        />
                        <MDBCheckbox
                            name="lowerMidRange"
                            id="lowerMidRange1"
                            label="50 - 100 BGN"
                            checked={
                                filteredData.selectPriceRange.lowerMidRange
                            }
                            onChange={(event) =>
                                handlePriceRangeChange(event)
                            }
                        />
                        <MDBCheckbox
                            name="midHighRange"
                            id="midHighRange1"
                            label="150 - 250 BGN"
                            checked={filteredData.selectPriceRange.midHighRange}
                            onChange={(event) =>
                                handlePriceRangeChange(event)
                            }
                        />
                    </div>
                    <div className="mt-4">
                        <h6>Color</h6>
                        <MDBCheckbox
                            name="red"
                            id="red1"
                            label="Red"
                            // checked={selectColor.red}
                            // onChange={handleColorChange}
                        />
                        <MDBCheckbox
                            name="white"
                            id="white1"
                            label="White"
                            // checked={selectColor.white}
                            // onChange={handleColorChange}
                        />
                        <MDBCheckbox
                            name="pink"
                            id="pinl1"
                            label="Pink"
                            // checked={selectColor.pink}
                            // onChange={handleColorChange}
                        />
                        <MDBCheckbox
                            name="yellow"
                            id="yellow1"
                            label="Yellow"
                            // checked={selectColor.yellow}
                            // onChange={handleColorChange}
                        />
                        <MDBCheckbox
                            name="blue"
                            id="blue1"
                            label="Blue"
                            // checked={selectColor.blue}
                            // onChange={handleColorChange}
                        />
                        <MDBCheckbox
                            name="black"
                            id="black1"
                            label="Black"
                            // checked={selectColor.black}
                            // onChange={handleColorChange}
                        />
                        <MDBCheckbox
                            name="green"
                            id="green1"
                            label="Green"
                            // checked={selectColor.green}
                            // onChange={handleColorChange}
                        />
                    </div>
                </div>
            </Col>
            <Col xs={12} className="mt-3 d-md-none">
                <DropdownButton
                    title="Filter"
                    variant="outline-black"
                    block="true"
                >
                    <Dropdown.Item>Action 1</Dropdown.Item>
                    <Dropdown.Item>Action 2</Dropdown.Item>
                    <Dropdown.Item>Action 3</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
    );
}

export default Filter;
