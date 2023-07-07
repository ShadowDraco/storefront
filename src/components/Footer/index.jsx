import { Typography, AppBar, Toolbar } from '@mui/material';

export default function Footer() {
  return (
    <>
      <AppBar
        position='fixed'
        color='primary'
        sx={{
          background: 'white',
          color: 'ThreeDDarkShadow',
          top: 'auto',
          bottom: 0,
        }}
      >
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-evenly', flexGrow: 1 }}
        >
          <Typography variant='caption'>&copy; Ethan Storm 2023</Typography>
          <Typography variant='caption'>(951) 202-320-230</Typography>
          <Typography variant='caption'>ReduxStoreFront@gmail.com</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
