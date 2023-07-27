import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import data from "./data/data.json";

import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/header";
import Products from "./components/Products";

function App() {
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const productsArray = Object.values(data);
        setProducts(productsArray);
        setDataLoaded(true);
    }, []);

    const productsGrid = (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4 mt-3 mb-4">
            {
                products.map((product) => (
                    <Col>
                        <Products product={product} />
                    </Col>
                ))
            }
        </Row>
    )

    return (
        <Container>
            <Header />
            {productsGrid}
        </Container>
    );
}

export default App;
