import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.css";
import utilsStyle from "./styles/utils.module.css";
import data from "./data/data.json";

import { Container, Row, Col, Button } from "react-bootstrap";

import NavigationBar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

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
            {products.map((product) => (
                <Col>
                    <Products product={product} />
                </Col>
            ))}
        </Row>
    );

    const homePage = (
        <>
         
            {products.length > 0 ? productsGrid : <h4>No products to show</h4>}
            <div
                className={`${utilsStyle.blockCenter} ${utilsStyle.flexCenter}`}
            >
                <Button variant="outline-dark" className="mt-3 mb-5" >Load More</Button>
            </div>
        </>
    );

    return (
        <Container>
            <NavigationBar />
            {homePage}
            <Footer />
        </Container>
    );
}

export default App;
