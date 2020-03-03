import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {withRouter} from 'react-router';

import {StoryProgressBar, Story} from '.';


export const StorysList = ({parentId, storys}) =>{
  const tmp = storys.filter((item)=>parentId==item.idTimer);
  return (
    <div className='container-story'>
      {tmp.map((item, i)=><Story key={i} {...item}/>) }
    </div>
  );
};
const mapDispatchToProps = (dispatch) =>({
  // printAll: ()=>{
  //   dispatch(setShowAll());
  // },
});
const mapStateToProps = (state) =>({
  storys: state.story,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StorysList);
