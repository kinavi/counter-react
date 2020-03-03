import React, {useState, useEffect} from 'react';


export const StoryProgressBar = ({count, limit}) =>{
//   const {_id, idTimer, isActive, limit, dateStart, dateStop} = props;
  const [percentBar, setPercentBar] = useState(0);

  useEffect(()=>{
    const percent = Math.trunc(count/limit*100);
    setPercentBar(percent);
  }, [count, limit]);

  return (
    <div className='bar-bg'>
      <div className='bar' style={{width: `${percentBar}%`}}/>
    </div>
  );
};
