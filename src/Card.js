import React from 'react';
import Title from './Title';
import Date from './Date';
import Explanation from './Explanation';
import Image from './Image';
import Copyright from './Copyright';


const Card = ({ data }) => {
  return (
    <div className='card'>
      <Title title={data}/>
      <Date date={data}/>
      <Explanation explanation={data}/>
      <Image url={data}/>
      <Copyright copyright={data}/>
    </div>
  )
}

export default Card;