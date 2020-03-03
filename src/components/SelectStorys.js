import React, {useState} from 'react';
import {
  useParams,
  Redirect,
} from 'react-router-dom';

import {StorysList, Count, Story} from '.';
import {connect} from 'react-redux';

const SelectStorys = ({storys}) =>{
  const {id} = useParams();
  const result = storys.filter((item)=>id==item.idTimer); // <--------- rename
  return (
    <div className='container-story'>
      {result.map((item, i)=>
        <Story key={i} {...item}/>) }
    </div>
  );
};
const mapStateToProps = (state) =>({
  storys: state.story,
});

export default connect(
    mapStateToProps,
    null,
)(SelectStorys);
