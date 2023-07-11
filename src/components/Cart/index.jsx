import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/reducers/currentProduct';
import { Box, List, ListItem, Container, Link } from '@mui/material';
import { removeFromCart } from '../../redux/reducers/cart';
import {
  asyncUpdateProduct,
  updateProduct,
} from '../../redux/reducers/products';
import Delete from '@mui/icons-material/Delete';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  return (
    <Container>
      <Box
        data-testid='CART'
        position='fixed'
        color='primary'
        sx={{
          background: 'white',
          color: 'ThreeDDarkShadow',
          top: 100,
          right: 50,
          left: 'auto',
          bottom: 'auto',
        }}
      >
        <List>
          {cart.map((item, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Link
                  href={`/product/${item._id}`}
                  underline='none'
                  color='black'
                >
                  <ListItem
                    className='listItem'
                    button
                    variant='caption'
                    onClick={() => {
                      dispatch(setCurrentProduct(item));
                    }}
                  >
                    {item.name}
                  </ListItem>
                </Link>
                <Delete
                  className='trashButton'
                  onClick={() => {
                    dispatch(removeFromCart(item));
                    let newItem = { ...item };
                    newItem.inStock = newItem.inStock + 1;
                    dispatch(asyncUpdateProduct(newItem)).then(data =>
                      dispatch(updateProduct(data))
                    );
                  }}
                />
              </Box>
            );
          })}
        </List>
      </Box>
    </Container>
  );
}
