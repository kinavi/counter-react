import React from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import {Story} from './index';

const SelectStorys = ({storys}) =>{
  const {id} = useParams();
  const result = storys.filter((item)=>id==item.idCount); // <--------- rename

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
