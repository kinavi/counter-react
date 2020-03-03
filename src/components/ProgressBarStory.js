import React, {useState, useEffect} from 'react';


export const ProgressBarStory = ({count, limit}) =>{
  const [percentBar, setPercentBar] = useState(0);

  const calculatePercent = () => Math.trunc(count/limit*100);

  useEffect(()=>{
    setPercentBar(calculatePercent);
  }, [count, limit]);

  return (
    <div className='bar-bg'>
      <div className='bar' style={{width: `${percentBar}%`}}/>
    </div>
  );
};
