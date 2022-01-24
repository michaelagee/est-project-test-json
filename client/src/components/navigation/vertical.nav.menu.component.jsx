import { Nav, Navbar, Container } from 'react-bootstrap'
import Search from '../search/search.component'

// TODO: change name to header or something like that....
const EstimationNavigationBar = props => {
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
            placeholder='Search or Add Estimations'
            buttonTitle={props.buttonTitle}
            handleChange={props.searchHandler}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default EstimationNavigationBar
