import React from 'react';
import { connect } from 'react-redux';

const CurrentCategory = (props) => {
  return <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}> {props.activeCategory.toString().toUpperCase()} </h2>;
};

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categories.activeCategory,
  };
};

export default connect(mapStateToProps)(CurrentCategory);
