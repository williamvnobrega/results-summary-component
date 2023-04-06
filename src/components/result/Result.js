import React from "react";
import '../../css/Result.css';

function Result(){
    return(
        <div className='container-result'>
            <h1>Your Result</h1>
            <div className='circle'>
                <strong>76</strong>
                <p> of 100</p>
            </div>
            <div className='text-result'>
                <p className='text-bold'>Great</p>
                <p>You scored higher than 65% of the people who have taken these tests. </p>
            </div>
            
        </div>
    ) 
}
    


export default Result