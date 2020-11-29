import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/products';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  style: { display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center' },
  button: { backgroundColor: 'rebeccapurple', margin: 'auto 1%' },
}));

//TODO: Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

const Categories = (props) => {
  const classes = useStyles();
  let categoriesToMap = props.category.categories;
  console.log('MAP???', categoriesToMap);

  return (
    <>
      <div className={(classes.root, classes.style)}>
        <h2>My Categories</h2>
        <ul>
          {categoriesToMap.map((category) => {
            return (
              <Button variant='contained' color='primary' className={classes.button} key={category.displayName} onClick={() => props.changeActiveCategory(category)}>
                {category.displayName}
              </Button>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.categories, // maybe change this
  };
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
