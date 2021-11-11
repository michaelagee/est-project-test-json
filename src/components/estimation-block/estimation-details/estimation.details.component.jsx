import React from 'react'

const EstimationDetails = props => {
  console.log('props', props)
  let currentEstimation = props.estimation
  if (!currentEstimation.id) {
    console.log('no frank.... you fucked up')
  }
  return (
    <div>
      <p>Project ID: {currentEstimation.id}</p>
      <p>Project Platform: {currentEstimation.platform}</p>
      <p>Project Hourly: {currentEstimation.hourly_rate}</p>
      <p>Application Type: {currentEstimation.application_type}</p>
      <p>Application Views: {currentEstimation.views}</p>
    </div>
  )
}

export default EstimationDetails
