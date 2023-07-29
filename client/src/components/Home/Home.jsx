import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Home() {
    return (
        <MDBCarousel showControls showIndicators>
            <MDBCarouselItem
                className="w-100 d-block"
                itemId={1}
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
            >
                <h5>Newest models sneakers are here</h5>
                <p>Now earn -50% discount on selected sneakers</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            >
                <h5>Newest models sneakers are here</h5>
                <p>Now earn -50% discount on selected sneakers</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className="w-100 d-block"
                itemId={2}
                src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            >
                <h5>Newest models sneakers are here</h5>
                <p>Now earn -50% discount on selected sneakers</p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}

export default Home;
