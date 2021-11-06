import { 
    Nav, 
    Navbar, 
    Container, 
    Form,
    FormControl,
    Button,
    NavDropdown } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';
import Search from "../search/search.component";

const EstimationNavigationBar = (props) => {
    let navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">WCGD Estimation Tool</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={() => { navigate("/") }}>Dashboard</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/newestimation") }}>Add a new Estimation</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        {/* <FormControl
                            placeholder="Search Estimations"
                            type="search"
                            placeholder="Search Estimations"
                            className="me-2"
                            handleChange={props.searchHandler}
                            aria-label="Search"
                        /> */}
                        <Search placeholder="Search Estimations" handleChange={props.searchHandler} />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
};

export default EstimationNavigationBar;