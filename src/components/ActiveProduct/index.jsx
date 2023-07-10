import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
} from '@mui/material';

export default function ActiveProduct({ product }) {
  const currentProduct = product
    ? product
    : useSelector(state => state.currentProduct);
  const dispatch = useDispatch();

  return (
    <Box mb={10}>
      <Box
        mt={6}
        mb={4}
        sx={{ textAlign: 'center' }}
      >
        <Typography variant='h2'>{currentProduct.name}</Typography>

        <Box
          mt={2}
          mb={2}
          sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Card
            sx={{
              width: '70%',
              maxWidth: 600,
            }}
            variant='outlined'
          >
            <CardMedia
              component='img'
              sx={{ maxHeight: 350 }}
              image={currentProduct.url}
              title={currentProduct.name}
            />
            <CardContent
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Typography
                variant='h6'
                component='div'
                color='text.secondary'
              >
                In Stock: {currentProduct.inStock}
              </Typography>
              <Typography variant='h6'>${currentProduct.price}</Typography>
            </CardContent>
          </Card>
        </Box>
        <Button
          className='blue'
          variant='primary'
          sx={{ width: '70%', maxWidth: 600 }}
        >
          BUY
        </Button>
        <Container
          sx={{
            marginLeft: '12%',
            marginTop: 3,
            width: '70%',
            maxWidth: 600,
            textAlign: 'left',
          }}
        >
          <Box>
            <Typography variant='h4'>Related Items</Typography>
          </Box>
          <Box mt={3}>
            <Typography variant='h4'>Product Details</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

ActiveProduct.propTypes = {
  product: PropTypes.object,
};
