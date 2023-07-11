import { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  List,
  ListItem,
  FormGroup,
  Paper,
  Container,
} from '@mui/material';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import React from 'react';
import { useSelector } from 'react-redux';

export default function CartPage({ testCart }) {
  const cart = testCart ? testCart : useSelector(state => state.cart.cart);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const getTotalPrice = () => {
    let price = 0;

    cart?.reduce((acc, item) => {
      price += item.price;
    }, 0);

    setTotal(price);
  };
  return (
    <Container>
      <Box
        data-testid='CartPage'
        mt={5}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 3 }}
        >
          <FormControl>
            <Box>
              <Typography variant='h6'>Order Summary</Typography>
              <List sx={{ marginBottom: '1em' }}>
                {cart?.length > 0
                  ? cart.map((item, i) => {
                      return (
                        <ListItem
                          key={i}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography>{item.name}</Typography>
                          <Typography>{item.price}</Typography>
                        </ListItem>
                      );
                    })
                  : ''}
              </List>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1em',
                }}
              >
                <Typography variant='h6'>Total</Typography>
                <Typography
                  variant='h6'
                  data-testid='TOTAL'
                >
                  ${total}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant='h5'
                width={'49%'}
              >
                Billing Address
              </Typography>

              <Typography
                variant='h5'
                width={'49%'}
              >
                Billing Address
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '30%',
                justifyContent: 'space-between',
              }}
            >
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor='FullName'>Full name</InputLabel>
                  <Input id='FullName' />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor='Address'>Address</InputLabel>
                  <Input id='Address' />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor='City'>City</InputLabel>
                  <Input id='City' />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor='State'>State</InputLabel>
                  <Input id='State' />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor='Zip'>Zip</InputLabel>
                  <Input id='Zip' />
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor='Card#'>Card #</InputLabel>
                  <Input id='Card#' />
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label='date' />
                  </DemoContainer>
                </LocalizationProvider>

                <FormControl>
                  <InputLabel htmlFor='CVV'>CVV</InputLabel>
                  <Input id='CVV' />
                </FormControl>
              </FormGroup>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant='contained'
                sx={{ width: '40%' }}
              >
                PLACE YOUR ORDER
              </Button>
            </Box>
          </FormControl>
        </Paper>
      </Box>
    </Container>
  );
}
