import * as React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
export const PostsItem = ({ preview, name, description, source, date, isvideo, lang, currentlanguage}) => {



//console.log({currentlanguage});
var arr=preview.split('|');
var first=arr.shift();
var last=arr.pop();

if(currentlanguage === lang){
if(isvideo){
  return (
    <Card border="none" style={{ backgroundColor: 'white' }}>
     <Card.Body><Card.Title><b>{name}</b></Card.Title></Card.Body>
    <video id="background-video" loop controls width="100%" height="auto" >
    <source src={last} type="video/mp4" />
    <source src={last} type="video/ogg" />
    Your browser does not support the video tag.
    </video>
    <Card.Body>
      
      <Card.Text>
      {description}
      </Card.Text>
      <Button href={source} target="_blank" variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{date}</small>
    </Card.Footer>
  </Card>
  
);
}

else if(first)
{
  var ext = first.substring(first.length-3,first.length);
	

	if(ext.toLowerCase() === 'png' || ext.toLowerCase() === 'jpg' ){
// boostrap

  return (
    
  <Card border="none" style={{ backgroundColor: 'white' }}>
    <Card.Body><Card.Title><b>{name}</b></Card.Title></Card.Body>
      <Card.Img variant="top" src={first} alt="Brak zdjęcia" />
    <Card.Body>
    
      <Card.Text>
      {description}
      </Card.Text>
      <Button href={source} target="_blank" variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{date}</small>
    </Card.Footer>
  </Card>
  
  );
	}
	else{
	return (	
  <Card border="none" style={{ backgroundColor: 'white' }}>
    <Card.Body><Card.Title><b>{name}</b></Card.Title></Card.Body>
    <Card.Img variant="top" src={"https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Color-Logo.wine.svg"} alt="Brak zdjęcia"/>
    <Card.Body>
      
      <Card.Text>
      {description}
      </Card.Text>
      <Button href={source} target="_blank" variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{date}</small>
    </Card.Footer>
  </Card>
		
  );
  }	
}


else	{
  return (	
    
  <Card border="none" style={{ backgroundColor: 'white' }}>
    <Card.Body><Card.Title><b>{name}</b></Card.Title></Card.Body>
    <Card.Img variant="top" src={"https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Color-Logo.wine.svg"} alt="Brak zdjęcia"/>
    <Card.Body>
      
      <Card.Text>
      {description}
      </Card.Text>
      <Button href={source} target="_blank" variant="primary">Go somewhere</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{date}</small>
    </Card.Footer>
  </Card>
  );
};
}else{	
  return null;
}
}