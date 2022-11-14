import React from 'react'
import {Alert, Button} from '@mui/material'
import docimg from '../images/doc.jpg'
import ProfileLayout from '../Layout/ProfileLayout'

const AccountVerification = () => {
  return (
    <ProfileLayout>
      <form>
        <div className='container account-verfication'>
          <h2>Account Verification</h2>
          <div className='border w-80 p-5 bg-fff'>
            <div className="row px-0 mx-0">
              <div className="col-12">
                <div className='p-number d-flex'>
                  <div>
                  Phone number verification<br></br>
                  You will receive an SMS with a numerical code.<br></br>
                  <br></br>
                  WORK (+351) 1111111<br></br>
                  <Button>Verify this number</Button>
                  <br></br>
                  <br></br>
                  </div>
                  <div>
                  <Alert className='mb-2' severity="success"><strong>VERIFIED</strong></Alert>
                  </div>
                </div>
                <div className='e-mail d-flex'>
                  <div>
                  Email verification<br></br>
                  <Button>Confirm email</Button>
                  <br></br>
                  <div className='d-none'>Email sent! Please check your inbox</div>
                  <br></br>
                  <br></br>
                  Upload a copy of your ID ID card, passport or driver's license<br></br>
                  <img src={docimg} alt=""/>
                  <div className='mt-2'>
                    <Button variant="contained" component="label">
                      Upload Image
                      <input hidden accept="image/*" multiple type="file"/>
                    </Button>
                  </div>
                  </div>
                  <div>
                  <Alert className='mb-2' severity="warning"><strong>UNVERIFIED</strong></Alert>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      </ProfileLayout>
  )
}

export default AccountVerification