import { Nav, Navbar, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Search from '../search/search.component'

// TODO: Create a page component that wraps all routes
const EstimationNavigationBar = props => {
  let navigate = useNavigate()
  console.log('nav props', props)
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>WCGD Estimation Tool</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>

          <Search
            onSubmit={props.handleSubmit}
            count={props.estimationsCount}
            placeholder='Search Estimations'
            buttonTitle={props.buttonTitle}
            handleChange={props.searchHandler}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default EstimationNavigationBar
