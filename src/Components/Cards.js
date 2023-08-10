import React from 'react'
import { useEffect, useState } from 'react';
import './Cards.css';


function Cards() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://nifty-points-prediction-api.onrender.com/').then((response) => {
            response.json().then((data) => {
                console.log(data)
                setData(data)
            })
        })
       }, []);
       
    return (
        <div>
            {
                data ? (
                    <div className='card'>
                    <h3>Tomorrow's price : {data.model_pred}</h3>
                    </div>
                ) : (
                    <h3>Loading...</h3>
                )
            }
        </div>
    )
}

export default Cards