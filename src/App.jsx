import * as React from "react";
import { PostsList } from "./components/PostsList";
import firebaseData from "./components/FirebaseData";
import { Col, Container} from "react-bootstrap";
import './index.css'
import Language from '@material-ui/icons/Language';

export class App extends React.Component {
  
  state = {
    posts: null,
    currentlanguage: "PL",
  };
/*
  componentDidMount()
  {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getRSS();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));


  }
*/
  onClickHot = () => {
    
    this.setState({ posts: null });
    
   const promisedPost = firebaseData.getHot();
    promisedPost
    .then(results => this.setState({ posts: results }))
    .catch(error => console.log( error));
    document.getElementsByClassName("myButtons")[0].style.borderBottom="solid 2px rgb(18, 62, 255)"
    
  }
 
  onClickTop = () => {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getTop();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));

  }
  onClickNew = () => {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getNew();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));
  }

  onClickRSS = () => {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getRSS();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));
  }

  chooseLang = () => {
    if(this.state.currentlanguage === "PL")
    {let x = document.getElementById("changeLangButton")
    x.firstChild.style.display ="block"
    x.lastChild.style.display ="none"
    this.setState({ currentlanguage: "ENG" })}
    else
    {this.setState({ currentlanguage: "PL" }) 
    let x = document.getElementById("changeLangButton")
    x.firstChild.style.display ="none"
    x.lastChild.style.display ="block"
    }
  }
  
  render() {
   // console.clear();
   //<main className="ui main text container">
    const posts = this.state.posts;
    const currentlanguage = this.state.currentlanguage;
    return (
      <div>
        <div id="back"></div>
        
       <Container >
        <Col md={{ span: 10, offset: 1 }} id="main" >
        
        <div style={{position:'relative', width: '100%',backgroundColor:'white',padding:'0px', margin:'0px',fontFamily: 'Anton, sans-serif'}}>
        
        <img src="logo.png" className="float-right" alt="" style={{ width: '280px' }}></img>
        
        <button className="float-left" id="changeLangButton" onClick={this.chooseLang}>
          <Language style={{display:'none'}} /><p><b>PL</b></p>
        </button>
         
        <br/><br/>
        <p style={{ position: 'absolute', left:'148px', top:'44px', backgroundColor: 'rgb(247, 247, 247)',paddingRight:'4px',paddingLeft:'4px',  }}>Strefa forum</p>
        
        <h4>
          <div className="myButtons" style={{ backgroundColor: 'white' }} onClick={this.onClickRSS} >Strona główna</div>
          <div className="myButtons" onClick={this.onClickHot}>Gorące</div>
          <div className="myButtons" onClick={this.onClickTop}>TOP</div>
          <div className="myButtons" onClick={this.onClickNew}>Najnowsze</div>
        </h4>
        </div>
        
        <br/> <br/><br/><br/>
        {posts ? <PostsList posts={posts} currentlanguage={currentlanguage}/> : ''}
         
        </Col>
        </Container>
      </div>
    );
  }
  
}