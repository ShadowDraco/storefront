import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router';

import { addToCart } from '../../redux/reducers/cart';
import {
  asyncUpdateProduct,
  updateProduct,
  setCurrentProduct,
  getCurrentProduct,
} from '../../redux/reducers/products';
import { useEffect } from 'react';

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  height: 60,
  minWidth: 'fit-content',
  lineHeight: '60px',
  padding: 3,
  paddingLeft: 10,
  paddingRight: 20,
}));

export default function ActiveProduct({ product }) {
  const params = useParams();

  useEffect(() => {
    if (typeof product !== undefined) {
      try {
        dispatch(setCurrentProduct()).then(data =>
          dispatch(
            getCurrentProduct({ results: data.payload.results, id: params.id })
          )
        );
      } catch (error) {
        console.error('Error in ActiveProduct UseEffect', error);
      }
    }
  }, [params.id]);

  const currentProduct = product
    ? product
    : useSelector(state => state.products.currentProduct);
  const dispatch = useDispatch();

  return (
    currentProduct && (
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
                image={`${import.meta.env.VITE_UNSPLASH_URL}${
                  currentProduct.name
                }`}
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
            onClick={() => {
              dispatch(addToCart(currentProduct));
              let item = { ...currentProduct };
              item.inStock = item.inStock - 1;
              dispatch(asyncUpdateProduct(item)).then(data =>
                dispatch(updateProduct(data))
              );
            }}
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
              <Box sx={{ display: 'flex', gap: 2 }}>
                {[1, 2, 3].map(number => (
                  <Item
                    key={number}
                    elevation={number}
                  >
                    {`Related Item ${number}`}
                  </Item>
                ))}
              </Box>
            </Box>
            <Box mt={3}>
              <Typography variant='h4'>Product Details</Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>Specifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Products Specs.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>User Reviews</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Product Reviews...</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Container>
        </Box>
      </Box>
    )
  );
}

ActiveProduct.propTypes = {
  product: PropTypes.object,
};
