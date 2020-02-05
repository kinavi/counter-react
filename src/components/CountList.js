import React from 'react';
import {connect} from 'react-redux';
import Count from './Count';

const CountList = ({counts}) =>{
  return (
    counts.map((count, i)=>
      <Count key={i} {...count}/>,
    )
  );
};

const mapStateToProps = (state) =>({
  counts: state,
});

export default connect(
    mapStateToProps,
    null,
)(CountList);
