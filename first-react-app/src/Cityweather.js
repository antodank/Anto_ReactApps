import React, { useState, useEffect } from "react";

export default function Cityweather() {

    const [data,setdata] = useState({});

    useEffect(() => 
    {
        fetchData();

    },[]);

    const fetchData = async ()=>{
        try {
        
            const response = await fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London", {
                method: 'Get',
                headers: {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "323b2e70c9msh6c6f03b0de192fcp10b3b6jsnefcd108492d9",
                    "useQueryString": true}
                });

                const jsondata  = await response.json();
                console.log(jsondata);
                setdata(jsondata);         
            
        } catch (e) {
            console.log(e);
        }
    }

    function fillData(data)
    {
        if('message' in data)
        {
            return(
                <div>
                    <h3> {data.message} </h3>
                </div>
            );
        }
        return(
            <div>
                <div>City Name - { data && data.name } </div>
                <div> Max Temp - { data.main && Math.round((data.main.temp_max - 273.15  + Number.EPSILON) * 100 / 100) }  Celcius</div>
                <div> Min Temp - { data.main && Math.round((data.main.temp_min - 273.15  + Number.EPSILON) * 100 / 100) } Celcius </div>
                <div>humidity - { data.main && data.main.humidity } % </div>
            </div>
        );
    }
    // useEffect(async () => {
    //     let query = 'London';
    //     const result = await axios(
    //         {
    //         "method": "GET",
    //         "url": `https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`,
    //         "headers": {
    //             "content-type": "application/json",
    //             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    //             "x-rapidapi-key": "323b2e70c9msh6c6f03b0de192fcp10b3b6jsnefcd108492d9",
    //             "useQueryString": true
    //           }
    //     }
    //     );
     
    //     setData(result.data);
    //   });

    return (
        <div>
             <h3>
                Fetching Data with React Hooks and JS fetch()
            </h3>
            { 
            Object.keys(data).length === 0 ?
                <div> <h1>no data available</h1></div> :
                <div>
                    {fillData(data)}
                </div>
            }
        </div>
    )
}
