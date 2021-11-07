import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("mumbai");
    useEffect(()=>{
        const fetchApi= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ed0ebbdd0eeab3e926e85b727dc1a4fe`
            const response=await fetch(url);
            const resJson= await response.json();
            setCity(resJson.main);
        }
        fetchApi();
        
    },[search])
    return(
        <>
        <div className="box">
            <div className='inputdata'>
                <input type="search " value={search} className="inputfield" onChange={(event)=>{setSearch(event.target.value)

                }}/>
            </div>
            {
                !city?(<p className="errorMsg">no data found</p>):(
                    <div>
                    <div className="info">
            <h2 className="location">
            <i className ="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">{city.temp} °C</h1>
            <h3 className="tempmin_max"> Min temp {city.temp}  °C |  Max temp{city.temp} °C : </h3>
        </div>
        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
                    </div>
                )
            }
       
        
        </div>
        </>
    )
}
export default Tempapp;