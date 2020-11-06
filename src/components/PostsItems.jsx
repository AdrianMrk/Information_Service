import * as React from "react";

export const PostsItem = ({ preview, name, description, source, date, isvideo, lang, currentlanguage}) => {



//console.log({currentlanguage});
var arr=preview.split('|');
var first=arr.shift();
var last=arr.pop();

if(currentlanguage === lang){
if(isvideo){
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

    
  <a href={source} target="_blank" rel="noopener noreferrer">link text</a>
    
  </li>
  );
};
}else{	
  return null;
}
}