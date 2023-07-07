import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/reducers/currentProduct';

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  return (
    <>
      <AppBar
        position='static'
        sx={{ background: 'white', color: 'ThreeDDarkShadow' }}
      >
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}
        >
          <Typography
            id='OURSTORE'
            variant='h4'
            onClick={() => {
              dispatch(setCurrentProduct({}));
            }}
          >
            OUR STORE
          </Typography>
          <Button color='inherit'>Cart ({cart.length})</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
