import {
    Nav,
    Navbar,
    Container,
    Form
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Search from "../search/search.component";

// TODO: Create a page component that wraps all routes
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
                        <Nav.Link onClick={() => { navigate("/manage-estimations") }}>Manage Estimations</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Search placeholder="Search Estimations" handleChange={props.searchHandler} />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
};

export default EstimationNavigationBar;