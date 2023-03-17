import React from 'react'
import { Spinner } from 'react-bootstrap'

export const SpinnerLoading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100%"}}>
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
    </div>
  )
}
