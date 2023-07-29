import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.css";

import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ShoesData from "./components/Shoes/ShoesData";
import BagsData from "./components/Bags/BagsData";
import Filter from "./components/Filter/Filter";
import Home from "./components/Home/Home";
import { FilteringProvider } from "./context/FilterContext";

function App() {
    return (
        <Container>
            <NavigationBar />
            <FilteringProvider>
                <Row>
                    <Col className="mt-5" md={2}>
                        <Filter />
                    </Col>
                    <Col md={10}>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/" element={<ShoesData />} />
                            <Route path="/shoes" element={<ShoesData />} />
                            <Route path="/bags" element={<BagsData />} />
                        </Routes>
                    </Col>
                </Row>
            </FilteringProvider>
            <Footer />
        </Container>
    );
}

export default App;
