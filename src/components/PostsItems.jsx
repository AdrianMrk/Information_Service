import * as React from "react";
import reddit from "./reddit_comp/reddit";

export const PostsItem = ({ preview, name, description, source, date}) => {


//console.log(preview)
var arr=preview.split('|');
var first=arr.shift(); //or arr[arr.length-1];
var last=arr.pop();
console.log({last})
//console.log(preview.slice(0, preview.indexOf('|')))

if(last){
  return (
  <li className="item">
    
    <div className="content">
      <h4 className="header">{name} | {date}</h4>
      <div className="description">{description}</div>		
    </div><br/>
    <video id="background-video" loop controls width="320" height="240" >
    <source src={last} type="video/mp4" />
    <source src={last} type="video/ogg" />
    Your browser does not support the video tag.
    </video>
  <a href={source} target="_blank" rel="noopener noreferrer">link text</a>
    
  </li>
);
}

else if(first)
{
  var ext = first.substring(first.length-3,first.length);
	

	if(ext.toLowerCase() === 'png' || ext.toLowerCase() === 'jpg' ){

  return (
    <li className="item">
      
      <div className="content">
        <h4 className="header">{name} | {date}</h4>
        <div className="description">{description}</div>		
      </div><br/>
      <img src={first} className="ui small rounded image" alt="Error" />
	  <a href={source} target="_blank" rel="noopener noreferrer">link text</a>
      
    </li>
  );
	}
	else{
	return (	
		  <li className="item">
      
      <div className="content">
        <h4 className="header">{name} | {date}</h4>
        <div className="description">{description}</div>		
      </div><br/>
	
      {reddit.allert("witam")}
	  <a href={source} target="_blank" rel="noopener noreferrer">link text</a>
      
    </li>
  );
  }	
}


else{	
  return (	
    <li className="item">
    
    <div className="content">
      <h4 className="header">{name} | {date}</h4>
      <div className="description">{description}</div>		
    </div><br/>

    {reddit.allert("witam")}
  <a href={source} target="_blank" rel="noopener noreferrer">link text</a>
    
  </li>
  );
};

  
}