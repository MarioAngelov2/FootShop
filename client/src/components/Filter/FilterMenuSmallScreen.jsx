import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { useFilter } from "../../context/FilterContext";

function FilterMenuSmallScreen() {
    const { filteredData, setFilteredData } = useFilter();
    const [showFilteredOptions, setShowFilteredOptions] = useState(false);

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

    const handleColorChange = (event) => {
        const { name, checked } = event.target;
        setFilteredData((prevColor) => ({
            ...prevColor,
            selectColor: {
                ...prevColor.selectColor,
                [name]: checked,
            },
        }));
    };

    const toggleFilterOptions = () => {
        setShowFilteredOptions(!showFilteredOptions);
    };

    return (
        <>
            <DropdownButton
                title="Filter"
                variant="outline-black"
                block="true"
                onClick={toggleFilterOptions}
            >
                {showFilteredOptions && (
                    <div>
                        <h6 className="mb-4">Price</h6>
                        <MDBCheckbox
                            name="all"
                            id="all1-small"
                            label="All"
                            checked={filteredData.selectPriceRange.all}
                            onChange={(event) => handlePriceRangeChange(event)}
                        />
                        <MDBCheckbox
                            name="lowerRange"
                            id="lowerRange1-small"
                            label="0 - 50 BGN"
                            checked={filteredData.selectPriceRange.lowerRange}
                            onChange={(event) => handlePriceRangeChange(event)}
                        />
                        <MDBCheckbox
                            name="lowerMidRange"
                            id="lowerMidRange1-small"
                            label="50 - 100 BGN"
                            checked={
                                filteredData.selectPriceRange.lowerMidRange
                            }
                            onChange={(event) => handlePriceRangeChange(event)}
                        />
                        <MDBCheckbox
                            name="midHighRange"
                            id="midHighRange1-small"
                            label="150 - 250 BGN"
                            checked={filteredData.selectPriceRange.midHighRange}
                            onChange={(event) => handlePriceRangeChange(event)}
                        />
                        <div className="mt-4">
                            <h6>Color</h6>
                            <MDBCheckbox
                                name="red"
                                id="red1-small"
                                label="Red"
                                checked={filteredData.selectColor.red}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="white"
                                id="white1-small"
                                label="White"
                                checked={filteredData.selectColor.white}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="pink"
                                id="pinl1-small"
                                label="Pink"
                                checked={filteredData.selectColor.pink}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="yellow"
                                id="yellow1-small"
                                label="Yellow"
                                checked={filteredData.selectColor.yellow}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="brown"
                                id="brown1-small"
                                label="Brown"
                                checked={filteredData.selectColor.brown}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="black"
                                id="black1-small"
                                label="Black"
                                checked={filteredData.selectColor.black}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="olive"
                                id="olive1-small"
                                label="Olive"
                                checked={filteredData.selectColor.olive}
                                onChange={(event) => handleColorChange(event)}
                            />
                            <MDBCheckbox
                                name="blue"
                                id="blue1"
                                label="Blue"
                                checked={filteredData.selectColor.blue}
                                onChange={(event) => handleColorChange(event)}
                            />
                        </div>
                    </div>
                )}
            </DropdownButton>
        </>
    );
}

export default FilterMenuSmallScreen;
