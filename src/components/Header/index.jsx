import { Typography, AppBar, Toolbar, Button } from '@mui/material';

export default function Header() {
  return (
    <>
      <AppBar
        position='static'
        sx={{ background: 'white', color: 'ThreeDDarkShadow' }}
      >
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}
        >
          <Typography variant='h4'>OUR STORE</Typography>
          <Button color='inherit'>Cart (1)</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
