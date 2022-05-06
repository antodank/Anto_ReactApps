import React from 'react';
import Bucketlist from './Bucketlist'
import TextWrap from './TextWrap'
import Counterbtn from './Counterbtn'
import Position from './Position'
import Refhook from './Refhook'
import RedditAPI from './Reddit'


function App() {
  return (
    <div className="App">
      {/* <div>
        <Counterbtn></Counterbtn>
      </div> */}
      {/* <div>
        <Bucketlist></Bucketlist>    
      </div>  */}
      <TextWrap text= {`React is a UI library. 
                      It draws components on a web page. 
                      You write components as JavaScript functions or classes, pass them to React, 
                      and it will call them to figure out what the page should look like.`}
                      maxLength = "30" ></TextWrap>
      {/* <div>
        <Position></Position>
      </div> */}
      {/* <div>
        <Refhook></Refhook>
      </div> */}
      {/* <div>
        <RedditAPI></RedditAPI>
      </div> */}
    </div>
  );
}

export default App;
