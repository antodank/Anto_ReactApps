import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './quotes.css';

export default function GetQuotes() {

    const [responseData,setResponseData] = useState([]);

    
    const fetchQuote = () =>{

        axios({
            "method": "GET",
            "url": "https://quotes15.p.rapidapi.com/quotes/random/",
            "headers": {
              "content-type": "application/json",
              "x-rapidapi-host": "quotes15.p.rapidapi.com",
              "x-rapidapi-key": ""
            }, "params": {
              "language_code": "en"
            }
          })
          .then((response) => {
            //Axios library returns a data object that has already been parsed to JSON
            setResponseData(response.data)
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error)
          })
    }

    useEffect(() => {
        fetchQuote()
      }, [])


    return (
        <div>
        <header className="quotes-header">
            <h3>
            Fetching Data with React Hooks and axios()
            </h3>
            <button type='button' onClick={fetchQuote}>Click for Quote</button>
            <main>
            {
                responseData &&
                <blockquote>
                    "{responseData && responseData.content}"
                <small>{responseData && responseData.originator && responseData.originator.name}</small>
                </blockquote>
            }
        </main>
        </header>
        </div>
    )
}
