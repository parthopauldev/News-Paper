import React from 'react';
import swimmingIng from "../../assets/swimming.png"
import classIng from "../../assets/class.png"
import playIng from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5 flex flex-col'>
<img src={swimmingIng} alt="" />
<img src={classIng} alt="" />
<img src={playIng} alt="" />
            </div>
        </div>
    );
};

export default Qzone;