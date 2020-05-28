import React from 'react';
import Title from './Title';
import Date from './Date';
import Explanation from './Explanation';
import Image from './Image';
import Copyright from './Copyright';


const Card = ({ data }) => {
  return (
    <div className='card'>
      {/* <h1 className='title'>{data.title}</h1> */}
      <Title title={data}/>
      {/* <h2 className='date'>{data.date}</h2> */}
      <Date date={data}/>
      <Explanation explanation={data}/>
      <Image url={data}/>
      <Copyright copyright={data}/>
    </div>
  )
}

export default Card;