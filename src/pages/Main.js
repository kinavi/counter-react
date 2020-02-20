import React from 'react';
import {Link} from 'react-router-dom';
import {CountList} from '../components';
import {connect} from 'react-redux';

const Main = ({counts}) => {
  return (
    <div><CountList counts={counts}/></div>
    // <div>
    //   <h1>Home</h1>
    //   <Link to="/about">About</Link>
    //   <br />
    //   <Link to="/todo">Todo</Link>
    // </div>
  );
};

const loadData = (store, param) => {
  return store.dispatch(fetchTodos(param));
};

const mapStateToProps = (state) =>({
  counts: state,
});

const mapDispatchToProps = {fetchTodos};

export default {
  component: connect(
      mapStateToProps,
      mapDispatchToProps,
  )(Main),
  loadData,
};

