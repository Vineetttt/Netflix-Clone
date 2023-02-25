import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showInfo,setShowInfo] = useState(false);
  return <article className="question">
    <header>
      <h4 onClick={()=> setShowInfo(!showInfo)}>
        {title}
        <button className="btn">
          {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </h4>
    </header>
    {showInfo && <p>{info}</p>}
  </article>;
};

export default Question;