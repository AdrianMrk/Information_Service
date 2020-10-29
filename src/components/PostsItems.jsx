import * as React from "react";
import reddit from "./reddit_comp/reddit";

export const PostsItem = ({ avatarUrl, name, phone, video, unixTime}) => {
  

if(avatarUrl)
{
  var ext = avatarUrl.substring(avatarUrl.length-3,avatarUrl.length);
	

	if(ext.toLowerCase() === 'png' || ext.toLowerCase() === 'jpg' ){

  return (
    <li className="item">
      
      <div className="content">
        <h4 className="header">{name} | {unixTime}</h4>
        <div className="description">{phone}</div>		
      </div><br/>
      <img src={avatarUrl} className="ui small rounded image" alt="Error" />
	  <a href={video} target="_blank" rel="noopener noreferrer">link text</a>
      
    </li>
  );
	}
	else{
	return (	
		  <li className="item">
      
      <div className="content">
        <h4 className="header">{name} | {unixTime}</h4>
        <div className="description">{phone}</div>		
      </div><br/>
	
      {reddit.allert("witam")}
	  <a href={video} target="_blank" rel="noopener noreferrer">link text</a>
      
    </li>
  );
  }	
}
	else{	
  return (	
    <li className="item">
    
    <div className="content">
      <h4 className="header">{name} | {unixTime}</h4>
      <div className="description">{phone}</div>		
    </div><br/>

    {reddit.allert("witam")}
  <a href={video} target="_blank" rel="noopener noreferrer">link text</a>
    
  </li>
  );
};

  
}