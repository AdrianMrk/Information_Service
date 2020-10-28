import * as React from "react";
import reddit from "./reddit";

export const PostsItem = ({ avatarUrl, name, phone, video, unixTime}) => {
	var ext = avatarUrl.substring(avatarUrl.length-3,avatarUrl.length);
	

	if(ext.toLowerCase() === 'png' || ext.toLowerCase() === 'jpg' ){

  return (
    <li className="item">
      
      <div className="content">
        <h4 className="header">{name} | {timeConverter(unixTime)}</h4>
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
        <h4 className="header">{name} | {timeConverter(unixTime)}</h4>
        <div className="description">{phone}</div>		
      </div><br/>
	
      {reddit.allert("witam")}
	  <a href={video} target="_blank" rel="noopener noreferrer">link text</a>
      
    </li>
  );
		
		
		
		
		
	}
};

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
 // var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = a.getMonth()+1;
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min ;
  return time;
}
