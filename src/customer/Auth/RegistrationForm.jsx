import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
  const navigate=useNavigate();

    const handleSubmit=(event)=>{
      event.preventDefault()

      const data=new FormData(event.currentTarget);

      const userData = {
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        email:data.get("email"),
        password:data.get("passsword")
      }
      console.log(userData)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={2} sm={6}>
                  <TextField
                  required
                  id='firstName'
                  name='firstName'
                  label="First Name"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={2} sm={6}>
                  <TextField
                  required
                  id='lastName'
                  name='lastName'
                  label="Last Name"
                  fullWidth
                  autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  required
                  id='email'
                  name='email'
                  label="Email"
                  fullWidth
                  autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  required
                  id='password'
                  name='password'
                  type='password'
                  label="Password"
                  fullWidth
                  autoComplete='password'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                  className='bg-[#9155FD] w-full'
                  type='submit'
                  variant='contained'
                  size='large'
                  sx={{padding:".8rem 0",bgcolor:"#9155FD"}}
                  >
                    Register
                  </Button>
                </Grid>
                
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
          <div className='py-3 flex items-center'>
            <p>if you have already account ?</p>
            <Button onClick={()=>navigate("/login")}
              className='ml-5'
              size='small'>
              Login
            </Button>
          </div>
        </div>

    </div>
  )
}

export default RegistrationForm