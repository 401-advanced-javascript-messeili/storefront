import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  rootStyle: { padding: '2%', margin: '2%' },
  style: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
});

const Products = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.style}>
      <h2>All Products:</h2>
      <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}>
        {props.productsToDisplay.map((product) => {
          return (
            <Card className={(classes.root, classes.rootStyle)}>
              <CardActionArea>
                <CardMedia className={classes.media} image={product.image} />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {product.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {product.price}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {product.inStock}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  add to cart
                </Button>
                <Button size='small' color='primary'>
                  view details
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('STATE???', state.products.products);
  return {
    products: state.products.products,
    productsToDisplay: state.products.productsToDisplay,
  };
};

export default connect(mapStateToProps)(Products);
