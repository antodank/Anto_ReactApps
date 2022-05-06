import React, { useState, useEffect,useRef } from 'react'

export default function Reddit({subreddit}) {

    // we use the help of useRef to test if it's the first render
    const firstRender = useRef(true);
    const [posts,setposts] = useState([]);

    const fectData = async () =>
    {
        try{
            let response =  await fetch(`https://www.reddit.com/r/${subreddit}.json`);
            
            const jsonData =   await response.json();
            console.log(jsonData);
            setposts(jsonData.data.children.map(c => c.data));
        }
        catch (e) {
            console.error(e);
            setposts([{id : 0,title: "No Data Found."}])
        } finally {
            console.log('We do cleanup here');
        }

        
    }

    useEffect(() => 
    {
        //skip on first render
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        //load
        fectData();

    },[subreddit,setposts]);



    return (
        <>
            <ul>
                { posts.map(post => (
                    <li key={post.id}>{post.title}</li>))}
            </ul>
        </>
    )
}
