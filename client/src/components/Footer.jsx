import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
        >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <MDBIcon
                        fab
                        icon="facebook-f"
                        className="me-4 text-reset"
                    />

                    <MDBIcon fab icon="twitter" className="me-4 text-reset" />

                    <MDBIcon fab icon="google" className="me-4 text-reset" />

                    <MDBIcon fab icon="instagram" className="me-4 text-reset" />

                    <MDBIcon fab icon="linkedin" className="me-4 text-reset" />

                    <MDBIcon fab icon="github" className="me-4 text-reset" />
                </div>
            </section>
            <section>
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="fw-bold mb-4">FOOT SHOP</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores corporis voluptate
                                ullam animi eum unde totam provident! Harum nisi
                                vel obcaecati, doloribus incidunt repudiandae
                                ipsam consequatur aliquam adipisci, voluptas
                                suscipit.
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2">
                            <h6 className="fw-bold mb-4">PRODUCTS</h6>
                            <p>
                                <a href="/home">Home</a>
                            </p>
                            <p>
                                <a href="/shoes"> Shoes</a>
                            </p>
                            <p>
                                <a href="/bags">Bags</a>
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3">
                            <h6 className="fw-bold mb-4">USEFUL LINKS</h6>
                            <p>Pricing</p>
                            <p>Orders</p>
                            <p>Help</p>
                        </MDBCol>
                        <MDBCol md="2" lg="3" xl="3">
                            <h6 className="fw-bold mb-4">CONTACT</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Sofia, Bulgaria
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />+ 359
                                1111 11 11
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
}

export default Footer;
