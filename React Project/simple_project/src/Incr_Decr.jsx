import React, { useState } from 'react';


const Incr_Decr = () => {
    const [Num,setData] = useState(0);
    const increNum = () => {
        setData(Num + 1);
    };

    const decreNum = () => {
        if (Num > 0) {setData(Num - 1);}
        else{
            alert("Sorry!! your number reached to 0");
            setData(0);
        }
    };
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1> {Num} </h1>
                    <div className='btn_div'>
                        <button onClick={increNum}> Increm </button>
                        <button onClick={decreNum}> Decrem </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Incr_Decr;