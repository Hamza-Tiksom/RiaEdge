import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import './login.css'
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import img1 from '../../images/m1.png'

export const SigninPage = () => {
  const gridStyle = { padding: 20, height: '70hv', width: "645px", margin: "327px auto" }

  return (
    <Grid container >












      <Grid item xs={6} className="Color">
        <Box className='MainBox'>
          <Box className='AllContentBox'>
            <Box className='ImageBox'></Box>
            <Box className='ContentBox'><h4 className='lefth4'>Automate Your Forms</h4>
              <p className='leftp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia libero libero, sed scelerisque ante ultricies at. In lorem neque, tincidunt non libero ac, porta congue quam.</p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid style={gridStyle} >
            <div >
              <Typography component="div" className='position inputText' fontFamily="Inter" font-style="normal"
                font-weight="500"
                font-size="340">
                <h4 className='righth4'>Login</h4>
              </Typography>
            </div>
            <div  >
              <div>
                <Typography component="div" className='position inputText' fontFamily="Inter" font-style="normal"
                  font-weight="500"
                  font-size="340">
                  <p className='rightp'>Welcome to Tiksom. Login to access your account and data.</p>
                </Typography>
              </div>
              <div className='position inputText mt-3'>
                <TextField className="container"
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  autoComplete=""
                  sx={{ input: { textAlign: "left" } }}
                />
              </div >
              <div className='position inputText mt-3' >
                <TextField
                  className="container "
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
              <div class="flex " >
                  <div class="mt-2" >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                  </div>
                  <div >
                    <Link className='rightText eye' href="#">Forgot Password?</Link>
                  </div>
              </div>
              <div>
                <Button className='container' variant='contained'>Login</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}