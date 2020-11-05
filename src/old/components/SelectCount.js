import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import {Count} from './index';
import {connect} from 'react-redux';

const SelectCount = ({counts} ) =>{
  const {id} = useParams();
  const result = counts.filter((item)=>item._id==id);

  return (
    <div>
      {
        result.map((count, i)=>
          <Count key={i} {...count}/>,
        )
      }
    </div>
  );
};

const mapStateToProps = (state) =>({
  counts: state.сounters,
});

export default connect(mapStateToProps, null)(SelectCount);
