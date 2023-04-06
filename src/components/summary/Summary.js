import React from "react";
import data from '../data/data.json'
import '../../css/Summary.css'

function Summary(){
    const posts= data.posts;
    const summaryScore = "summaryScore";
    return(
        <div className='sum-container'>
        <h1>Summary</h1>
        {posts.map((data)=>(
            <div>
                <div className={`${summaryScore} ${data.category}`}>
                    <div className='category'>
                    <img alt={data.category} src={data.icon}/>
                    <p>
                    {data.category}
                    </p>
                    </div>
                    <span>{data.score}<span> / 100</span></span>   
                </div>
            </div>
        ))}
        <button className='btnContinue'>Continue</button>
        </div>
    )
}

export default Summary