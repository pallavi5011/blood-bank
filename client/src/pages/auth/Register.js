import React from 'react'
import Form from '../../components/shared/Form/Form'

const Register = () => {
  return (
    <div>
      <>
        <div className='row'>
          <div className='col-md-8 form-banner'>
            <img src="./assets/images/banner1.jpg" alt="loginImage" />
          </div>

          <div className='col-md-4 form-cantainer'>
            <Form formTitle={'Register'} submitBtn={'Register'} />
          </div>
        </div>
      </>
    </div>
  )
}

export default Register
