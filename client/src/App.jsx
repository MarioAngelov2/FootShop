import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.css";

import { Container } from "react-bootstrap";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import DropdownMenu from "./components/DropdownMenu";
import ShoesData from "./components/ShoesData";

function App() {
    return (
        <Container>
            <NavigationBar />
            <DropdownMenu />
            <Routes>
                <Route path="/shoes" element={<ShoesData />} />
            </Routes>

            <Footer />
        </Container>
    );
}

export default App;
