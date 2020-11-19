import * as React from "react";
import { PostsList } from "./components/PostsList";
import firebaseData from "./components/FirebaseData";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";


export class App extends React.Component {
  
  state = {
    posts: null,
    currentlanguage: "PL",
  };


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
    const posts = this.state.posts;
    const currentlanguage = this.state.currentlanguage;
    return (
      <div>
        
       
        <main className="ui main text container">
        
        
        PL  <label className="switch">
          <input type="checkbox" value="2" onClick={this.chooseLang}/>
          <span className="slider round"></span>
        </label> WORLD
         
        <br/> <br/>
        

        <ToggleButtonGroup type="checkbox" value="1">
          <ToggleButton onClick={this.onClickRSS}>RSS</ToggleButton>
          <ToggleButton onClick={this.onClickHot}>HOT</ToggleButton>
          <ToggleButton onClick={this.onClickTop}>TOP</ToggleButton>
          <ToggleButton onClick={this.onClickNew}>New</ToggleButton>
        </ToggleButtonGroup>
        <br/> <br/>
        {posts ? <PostsList posts={posts} currentlanguage={currentlanguage}/> : 'Ładowanie…'}
         
          
        </main>
      </div>
    );
  }
  
}