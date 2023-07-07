import { useSelector } from 'react-redux';
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

export default function Products({ chosenCategory }) {
  const products = useSelector(state => state.products[chosenCategory]);

  const mappableProducts = Object.entries(Object.entries(products)[0][1]);

  return (
    <Box mt={6}>
      <Container sx={{ display: 'flex', gap: 5 }}>
        {mappableProducts.map((product, i) => {
          return (
            <Card key={i}>
              <CardMedia
                sx={{ height: 120 }}
                image={product[1].url}
                title='green iguana'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                >
                  {product[0]}
                </Typography>
                <Typography
                  variant='caption'
                  color='text.secondary'
                >
                  {product[1].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>ADD TO CART</Button>
                <Button size='small'>VIEW DETAILS</Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}

Products.propTypes = {
  chosenCategory: PropTypes.number,
};
