import { connect } from 'react-redux';
import { Component } from './component';
import {decreaseCount,increaseCount,resetCount} from './action'

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch(increaseCount()),
    handleDecrementClick: () => dispatch(decreaseCount()),
    resetClick: () => dispatch(resetCount())
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);