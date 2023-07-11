import { Typography, AppBar, Toolbar, Button, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/reducers/currentProduct';
import { showPage } from '../../redux/reducers/cart';

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  return (
    <>
      <AppBar
        position='static'
        sx={{ background: 'white', color: 'ThreeDDarkShadow' }}
      >
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}
        >
          <Link
            href='/'
            underline='none'
            color='black'
          >
            <Typography
              id='OURSTORE'
              variant='h4'
              onClick={() => {
                dispatch(setCurrentProduct({}));
                dispatch(showPage(false));
              }}
            >
              OUR STORE
            </Typography>
          </Link>
          <Link
            href='/cart'
            underline='none'
            color='black'
          >
            <Button
              color='inherit'
              onClick={() => {
                dispatch(showPage(true));
              }}
            >
              Cart ({cart?.length})
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
