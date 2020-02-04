import React from 'react';
import {connect} from 'react-redux';
import {FaPlay} from 'react-icons/fa';

import {ProgressBar} from './ProgressBar';


const CountList = ({counts}) =>{
  return (
    counts.map((count, i)=>
      <div key={i} className='container flex-container '>
        <span className='title'>
          {count.name}
        </span>
        <ProgressBar count={count.count}/>
        <FaPlay className='btn'/>
      </div>,
    )
  );
};

const mapStateToProps = (state) =>({
  counts: state,
});

const mapDispatchToProps = (dispatch) =>({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CountList);
