import { Row, Col } from "react-bootstrap";
import utilStyle from "../../styles/utils.module.css";
import FilterMenuBigScreen from "./FilterMenuBigScreen";
import FilterMenuSmallScreen from "./FilterMenuSmallScreen";

function Filter() {
    return (
        <Row className={utilStyle.fontSize}>
            <Col className={`${utilStyle.marginTop}`} md={2}>
                <div className="d-none d-md-block">
                    <FilterMenuBigScreen />
                </div>
            </Col>
            <Col xs={12} className="mt-3 d-md-none">
                <FilterMenuSmallScreen />
            </Col>
        </Row>
    );
}

export default Filter;
