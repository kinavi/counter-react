import React from 'react';
import {connect} from 'react-redux';

import {Count} from './index';

const CountList = ({counts}) =>{
  return (
    <div>
      {
        counts.map((count, i)=>
          <Count key={i} {...count}/>,
        )
      }
    </div>
  );
};
const mapStateToProps = (state) =>({
  counts: state.сounters,
});

export default connect(
    mapStateToProps,
    null,
)(CountList);
