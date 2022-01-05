import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import Search from '../search/search.component'

// TODO: Create a page component that wraps all routes
const EstimationNavigationBar = props => {
  const getEstimations = async () => {
    console.log('wtf')
      const response = await fetch("http://localhost:1020/estimations");

      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }
      console.log(body, "body");
      return body;
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>WCGD Estimation Tool</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>

          <Search
            onSubmit={props.handleSubmit}
            count={props.estimationsCount}
            placeholder='Search Estimations'
            buttonTitle={props.buttonTitle}
            handleChange={props.searchHandler}
          />

          <Button
            onClick={getEstimations}>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default EstimationNavigationBar
