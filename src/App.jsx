import * as React from "react";
import { PostsList } from "./components/PostsList";
import { AppHeader } from "./AppHeader";
import firebaseData from "./components/FirebaseData";


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
   

  }
  onClickNew = () => {
 
  }

  onClickNew = () => {
 
  }
  onClickLang = () => {
    this.state.currentlanguage = "ENG"
  }
 

  
  render() {
   // console.clear();
    const posts = this.state.posts;
    const currentlanguage = this.state.currentlanguage;
    return (
      <div>
        <AppHeader/>
       
        <main className="ui main text container">
        <input type="checkbox" id="myCheck" onClick={this.onClickLang}/>
        <button onClick={this.onClickHot}>HOT</button>;
        <button onClick={this.onClickTop}>TOP</button>;
        <button onClick={this.onClickNew}>NEW</button>;
        <button onClick={this.onClickWykop}>Wykop</button>;
        {posts ? <PostsList posts={posts} currentlanguage={currentlanguage}/> : 'Ładowanie…'}
         
          
        </main>
      </div>
    );
  }
  
}