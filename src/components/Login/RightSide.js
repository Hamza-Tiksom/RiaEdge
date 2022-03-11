// import React from 'react'
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';
// import Button from '@mui/material/Button';
// import './login.css'
// import Grid from '@mui/material/Grid';
// import { Paper } from '@mui/material';

// export const RightSide = () => {
//   const gridStyle = { padding: 20, height: '70hv', width: "645px", margin: "327px auto" }
//   return (
//     <>
// <Grid container>          
//       <Grid style={gridStyle}>

//         <div>
//           <Typography component="div" className='position inputText' fontFamily="Inter" font-style="normal"
//             font-weight="500"
//             font-size="340">
//             <h4>Login</h4>
//           </Typography>
//         </div>
//         <div >
//           <Typography component="div" className='position inputText' fontFamily="Inter" font-style="normal"
//             font-weight="500"
//             font-size="340">
//             <p class>Welcome to Tiksom. Login to access your account and data.</p>
//           </Typography>
//           <div className='position inputText'>
//             <TextField className="container"
//               id="outlined-email-input"
//               label="Email"
//               type="email"
//               autoComplete=""
//               sx={{ input: { textAlign: "left" } }}
//             />
//           </div>
//           <div className='position inputText'>
//             <TextField 
//               className="container"
//               id="outlined-password-input"
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//             />
//           </div>
//           <div >
//             <FormControlLabel  control={<Checkbox defaultChecked />} label="Remember Me" />
//             <Link className='rightText password' href="#">Forgot Password?</Link>
//           </div>
//           <div>
//             <Button className='container' variant='contained'>Login</Button>
//           </div>
//         </div>
//       </Grid>
// </Grid>
//     </>
//   )
// }