import React, { useState, useEffect } from 'react'

const EstimationDetails = props => {
  const [currentEstimation, setCurrentEstimation] = useState('')

  useEffect(() => {
    setCurrentEstimation(currentEstimation)
  }, [currentEstimation])

  console.log('yo pops, whats the props', props)
  if (currentEstimation) {
    return (
      <div>
        <h1>Nothing to see here</h1> <p> please create a new estimation</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>Estimation Name: {currentEstimation.name}</p>
        <p>Project ID: {currentEstimation.id}</p>
        <p>Project Platform: {currentEstimation.platform}</p>
        <p>Project Hourly: {currentEstimation.hourly_rate}</p>
        <p>Application Type: {currentEstimation.application_type}</p>
        <p>Application Views: {currentEstimation.views}</p>
      </div>
    )
  }
}

export default EstimationDetails
