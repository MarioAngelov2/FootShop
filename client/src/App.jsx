import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.css";

import { Container, Row, Col } from "react-bootstrap";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import DropdownMenu from "./components/DropdownMenu";
import ShoesData from "./components/ShoesData";
import BagsData from "./components/BagsData";
import Filter from "./components/Filter";
import { SortingProvider } from "./context/DataContext";

function App() {
    return (
        <Container>
            <NavigationBar />
            <Row>
                <Col className="mt-5" md={2}>
                    <Filter />
                </Col>
                <Col md={10}>
                    <Routes>
                        <Route path="/shoes" element={<ShoesData />} />
                        <Route path="/bags" element={<BagsData />} />
                    </Routes>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default App;
