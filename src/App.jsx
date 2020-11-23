import * as React from "react";
import { PostsList } from "./components/PostsList";
import firebaseData from "./components/FirebaseData";
import { Col, Container} from "react-bootstrap";


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
    this.setState({ currentlanguage: "ENG" })
    else
    this.setState({ currentlanguage: "PL" })
  }
 

  
  render() {
   // console.clear();
   //<main className="ui main text container">
    const posts = this.state.posts;
    const currentlanguage = this.state.currentlanguage;
    return (
      <div>
        
       <Container >
        <Col md={{ span: 10, offset: 1 }} id="main" >
        
        <div style={{position:'relative', width: '100%',backgroundColor:'white',padding:'0px', margin:'0px',}}>
        
        <img src="logo.png" className="float-right" alt="" style={{ width: '280px' }}></img>
        <p className="float-right" style={{ marginRight:'10px'  }}>
        POLSKA  <label className="switch">
          <input type="checkbox" value="2" onClick={this.chooseLang}/>
          <span className="slider round"></span>
        </label> ŚWIAT
        </p>
        
         
        <br/>
        <p style={{ position: 'absolute', left:'148px', top:'24px', backgroundColor: 'rgb(247, 247, 247)',paddingRight:'4px',paddingLeft:'4px',  }}>Strefa forum</p>
        
        <h4>
        <div className="myButtons" style={{ backgroundColor: 'white' }} onClick={this.onClickRSS} >Strona główna</div>
        <div className="myButtons" onClick={this.onClickHot}>Gorące</div>
        <div className="myButtons" onClick={this.onClickTop}>TOP</div>
        <div className="myButtons" onClick={this.onClickNew}>Najnowsze</div>
        </h4>
        </div>
        
        <br/> <br/><br/>
        {posts ? <PostsList posts={posts} currentlanguage={currentlanguage}/> : ''}
         
        </Col>
        </Container>
      </div>
    );
  }
  
}