import { MDBCheckbox } from "mdb-react-ui-kit";
import { useFilter } from "../../context/FilterContext";

function FilterMenuBigScreen() {
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

    return (
        <>
            <div>
                <h6 className="mb-4">Price</h6>
                <MDBCheckbox
                    name="all"
                    id="all1"
                    label="All"
                    checked={filteredData.selectPriceRange.all}
                    onChange={(event) => handlePriceRangeChange(event)}
                />
                <MDBCheckbox
                    name="lowerRange"
                    id="lowerRange1"
                    label="0 - 50 BGN"
                    checked={filteredData.selectPriceRange.lowerRange}
                    onChange={(event) => handlePriceRangeChange(event)}
                />
                <MDBCheckbox
                    name="lowerMidRange"
                    id="lowerMidRange1"
                    label="50 - 100 BGN"
                    checked={filteredData.selectPriceRange.lowerMidRange}
                    onChange={(event) => handlePriceRangeChange(event)}
                />
                <MDBCheckbox
                    name="midHighRange"
                    id="midHighRange1"
                    label="150 - 250 BGN"
                    checked={filteredData.selectPriceRange.midHighRange}
                    onChange={(event) => handlePriceRangeChange(event)}
                />
            </div>
            <div className="mt-4">
                <h6>Color</h6>
                <MDBCheckbox
                    name="red"
                    id="red1"
                    label="Red"
                    checked={filteredData.selectColor.red}
                    onChange={(event) => handleColorChange(event)}
                />
                <MDBCheckbox
                    name="white"
                    id="white1"
                    label="White"
                    checked={filteredData.selectColor.white}
                    onChange={(event) => handleColorChange(event)}
                />
                <MDBCheckbox
                    name="pink"
                    id="pinl1"
                    label="Pink"
                    checked={filteredData.selectColor.pink}
                    onChange={(event) => handleColorChange(event)}
                />
                <MDBCheckbox
                    name="yellow"
                    id="yellow1"
                    label="Yellow"
                    checked={filteredData.selectColor.yellow}
                    onChange={(event) => handleColorChange(event)}
                />
                <MDBCheckbox
                    name="brown"
                    id="brown1"
                    label="Brown"
                    checked={filteredData.selectColor.brown}
                    onChange={(event) => handleColorChange(event)}
                />
                <MDBCheckbox
                    name="black"
                    id="black1"
                    label="Black"
                    checked={filteredData.selectColor.black}
                    onChange={(event) => handleColorChange(event)}
                />
                <MDBCheckbox
                    name="olive"
                    id="olive1"
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
        </>
    );
}

export default FilterMenuBigScreen;
