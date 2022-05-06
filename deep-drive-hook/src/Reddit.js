import React, { useEffect, useState } from 'react'

export default function Reddit({content}) {

    const [itemstate, setitemstate] = useState([]);

    const handleChange = (e) => {
        console.log("Reddit -> " + e.currentTarget.value);
        setitemstate(e.currentTarget.value)
    };


    const APIkeys = [{ "id":0,"keyName" : "-- select --"},
                    { "id":1,"keyName" : "worldnews"},
                    { "id":2,"keyName" : "todayilearned"},
                    { "id":3,"keyName" : "relationship_advice"},
                    { "id":4,"keyName" : "politics"},
                    { "id":5,"keyName" : "movies"}];
    return (
        <div>
            <div>{itemstate}</div>
            <select onChange={handleChange} >
                { APIkeys.map( key => 
                  <option key = { key.id}  
                  value = {key.keyName}>
                  {key.keyName}</option> 
                  )}
            </select>
            <div>
                <RedditAPI apiMethod = {itemstate} ></RedditAPI>
            </div>
        </div>
    )
}

export function RedditAPI({apiMethod}) {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        console.log("RedditAPI -> " + apiMethod);
        if(apiMethod.length !== 0){
            fetchData();
        }
        
    },[apiMethod,setposts])

    const fetchData = async () => {
        const response = await fetch(`https://www.reddit.com/r/${apiMethod}.json`);
        const jsonData = await response.json();
        setposts(jsonData.data.children.map(c => c.data));
    }


    return (
        <div>
            <ul>
                { posts.map(post =>(
                    <li key={post.id}>{ post.title }</li>
                ))}
            </ul>
        </div>
    )
}
