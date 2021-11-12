import React from 'react'
import { Form, Button } from 'react-bootstrap';
import EstimationInvoice from '../estimation-invoice/estimation.invoice.component';
import InlineCheckBoxes from './inlineCheckBox.component';

function EstimationForm(props) {

 
  // return (
  //   <Form>
  //     <Form.Group className='mb-3' controlId='formBasicEmail'>
  //       <Form.Label>Estimation Title</Form.Label>
  //       <Form.Control type="input" placeholder={props.estimation.name} readOnly />
  //       <Form.Text className='text-muted'>
  //         We'll never share your email with anyone else.
  //       </Form.Text>
  //     </Form.Group>

  //     {/* ID Read Only */}
  //     <Form.Group className='mb-3' controlId='formEstimationId'>
  //       <Form.Label>Estimation ID</Form.Label>
  //       <Form.Control placeholder={props.estimation.name} readOnly />
  //     </Form.Group>

  //     {/* Platform */}
  //     <Form.Group className='mb-3' controlId='formPlatform'>
  //       <Form.Label>Platform</Form.Label>
  //       <Form.Control placeholder={props.estimation.platform} />
  //     </Form.Group>

  //     {/* Hourly Rate */}
  //     <Form.Group className='mb-3' controlId='formHourlyRate'>
  //       <Form.Label>Hourly Rate</Form.Label>
  //       <Form.Control placeholder={props.estimation.hourly_rate} />
  //     </Form.Group>

  //     {/* Application Type */}
  //     <Form.Group className='mb-3' controlId='formApplicationType'>
  //       <Form.Label>Application Type (E-Commerce, Social, Utility, Etc)</Form.Label>
  //       <Form.Control placeholder={props.estimation.application_type} />
  //     </Form.Group>

  //     {/* Application Views */}
  //     <Form.Group className='mb-3' controlId='formApplicationType'>
  //       <Form.Label>Application Views</Form.Label>
  //       <div className="mb-3">
  //       <InlineCheckBoxes objectField={props.estimation.views}/>
  //       </div>
  //     </Form.Group>
      
  //     {/* Native Capabilities */}
  //     <Form.Group className='mb-3' controlId='formApplicationType'>
  //       {/* This maps to estimation.general_estimate_features */}
  //       <Form.Label>General Application Features</Form.Label>
  //       <div className="mb-3">
  //       <InlineCheckBoxes objectField={props.estimation.general_estimate_features}/>
  //       </div>
  //     </Form.Group>
      
  //     <Form.Group className='mb-3' controlId='formApplicationType'>
  //       {/* This maps to estimation.capabilties */}
  //       <Form.Label>Native Capabilities</Form.Label>
  //       <div className="mb-3">
  //       <InlineCheckBoxes objectField={props.estimation.capabilities}/>
  //       </div>
  //     </Form.Group>
      
  //     <Form.Group className='mb-3' controlId='formApplicationType'>
  //       {/* This maps to estimation.platform_specific_features */}
  //       <Form.Label>Media Performance and Optimization</Form.Label>
  //       <div className="mb-3">
  //       {/* <InlineCheckBoxes objectField={props.estimation.media}/> */}
  //       </div>
  //     </Form.Group>

  //     <Button variant='primary' type='submit'>
  //       Submit
  //     </Button>
  //   </Form>
  // )

  return (
    <EstimationInvoice rate={props.rate} estimation={props.estimation}/>
  )
}

export default EstimationForm;