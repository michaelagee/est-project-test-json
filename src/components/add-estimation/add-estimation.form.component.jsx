import React from 'react'
import { Form, Button } from 'react-bootstrap'

function EstimationForm(props) {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Estimation Title</Form.Label>
        <Form.Control type="input" placeholder={props.estimation.name} readOnly />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* ID Read Only */}
      <Form.Group className='mb-3' controlId='formEstimationId'>
        <Form.Label>Estimation ID</Form.Label>
        <Form.Control placeholder={props.estimation.name} readOnly />
      </Form.Group>

      {/* Platform */}
      <Form.Group className='mb-3' controlId='formPlatform'>
        <Form.Label>Platform</Form.Label>
        <Form.Control placeholder={props.estimation.platform} />
      </Form.Group>

      {/* Hourly Rate */}
      <Form.Group className='mb-3' controlId='formHourlyRate'>
        <Form.Label>Hourly Rate</Form.Label>
        <Form.Control placeholder={props.estimation.hourly_rate} />
      </Form.Group>

      {/* Application Type */}
      <Form.Group className='mb-3' controlId='formApplicationType'>
        <Form.Label>Application Type (E-Commerce, Social, Utility, Etc)</Form.Label>
        <Form.Control placeholder={props.estimation.application_type} />
      </Form.Group>

      {/* Application Views */}
      <Form.Group className='mb-3' controlId='formApplicationType'>
        <Form.Label>Application Views</Form.Label>
        {props.estimation.views.map((view) => (
          ['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label={view}
                name="group1"
                type={type}
                id={`inline-${type}-${view}`}
              />
            </div>
          ))
        ))}
        { }
      </Form.Group>


      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default EstimationForm;