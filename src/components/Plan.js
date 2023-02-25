import React from 'react';
import './Plan.css';

function Plan() {
  return (
    <div className='plans'>
        <div className="plans_info">
            <h4>Premium &ensp; <span>(4K + HDR)</span></h4>
            <button>Subscribe</button>
        </div>
        <div className="plans_info">
            <h4>Basic &ensp; <span>(720p)</span></h4>
            <button>Subscribe</button>
        </div>
        <div className="plans_info">
            <h4>Standard &ensp; <span>(1080p)</span></h4>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Plan