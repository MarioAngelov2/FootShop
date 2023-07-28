import React from "react";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { MDBCheckbox } from "mdb-react-ui-kit";
import utilStyle from "../styles/utils.module.css";

function Filter() {
    return (
        <Row className={utilStyle.fontSize}>
            <Col className={`${utilStyle.marginTop}`} md={2}>
                <div className="d-none d-md-block">
                    <div>
                        <h6 className="mb-4">Price</h6>
                        <MDBCheckbox name="all" id="all1" label="All" />
                        <MDBCheckbox
                            name="lowerRange"
                            id="lowerRange1"
                            label="0 - 50 BGN"
                        />
                        <MDBCheckbox
                            name="lowerMidRange"
                            id="lowerMidRange1"
                            label="50 - 100 BGN"
                        />
                        <MDBCheckbox
                            name="midHighRange"
                            id="midHighRange1"
                            label="150 - 250 BGN"
                        />
                        <MDBCheckbox
                            name="aboveAll"
                            id="aboveAll1"
                            label="Over 250 BGN"
                        />
                    </div>
                    <div className="mt-4">
                        <h6>Color</h6>
                        <MDBCheckbox name="red" id="red1" label="Red" />
                        <MDBCheckbox name="white" id="white1" label="White" />
                        <MDBCheckbox name="pink" id="pinl1" label="Pink" />
                        <MDBCheckbox name="yellow" id="yellow1" label="Yellow" />
                        <MDBCheckbox name="blue" id="blue1" label="Blue" />
                        <MDBCheckbox name="black" id="black1" label="Black" />
                        <MDBCheckbox name="green" id="green1" label="Green" />
                    </div>
                </div>
            </Col>
            <Col xs={12} className="mt-3 d-md-none">
                <DropdownButton title="Filter" variant="outline-black" block="true">
                    <Dropdown.Item>Action 1</Dropdown.Item>
                    <Dropdown.Item>Action 2</Dropdown.Item>
                    <Dropdown.Item>Action 3</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
    );
}

export default Filter;
