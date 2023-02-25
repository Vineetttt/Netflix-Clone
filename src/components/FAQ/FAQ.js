import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import './FAQ.css';

function Faq() {
  const [questions] = useState(data);
  return(
    <>
    <div className="main">
        <h1>Frequently Asked Question</h1>
        <div className="container">
            <section className="info">
                {questions.map((question)=>{
                return <SingleQuestion key={question.id}{...question}/>;
                })}
            </section>
        </div>
    </div>
  </> 
  );
}

export default Faq;