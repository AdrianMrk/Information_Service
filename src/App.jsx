import * as React from "react";
import db from "../src/components/config";
import { PostsList } from "./components/reddit_comp/PostsList";
import { WykopPostsList } from "./components/wykop_comp/WykopPostsList";
import { AppHeader } from "./AppHeader";
import firebaseData from "./components/reddit_comp/FirebaseData";
import wykop from "./components/wykop_comp/wykop";

export class App extends React.Component {
  
  state = {
    posts: null,
    wykopPosts: null,
  };

  
 // componentDidMount() {

  //  reddit.search("hot","10").then(results => this.setState({ redditPosts: results })& console.log(results))

  async componentDidMount() {
  //  const response = await this.search()
  //  const json = await response.json();
  //  console.log(json)
  }



    /*
    var result = reddit.search("top");
     redditPosts: result;
     console.log(result);*/
  //  console.log(result);
  //  fetch("http://www.reddit.com/top.json?q=$g=PL&limit=10")
  //    .then(res => res.json())
  //    .then(data => this.setState({ redditPosts: data.data.children })& console.log(data.data.children));
  //}
  onClickHot = () => {
    
   // this.search().then(results => this.setState({ redditPosts: results })& console.log(results))
    
   const promisedPost = firebaseData.getHot();
  promisedPost
  .then(results => this.setState({ posts: results }))
  .catch(error => console.log( error));
  }
  
  
  getPresent = () => {
    return new Promise((resolve) => {
      let redditPosts = [];
    
      let nodesRef = db.ref("/HotPosts")
    
     
        nodesRef.once('value').then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
       
             
             redditPosts.push(childSnapshot.val());
  
           })
         }).then(() => {  resolve(redditPosts);
        })
    });
  }
 
  onClickTop = () => {
 //   console.clear();
 //   reddit.search("top","10").then(results => this.setState({ redditPosts: results })& console.log(results))
    

  }
  onClickNew = () => {
 //   console.clear();
 //   reddit.search("new","8").then(results => this.setState({ redditPosts: results })& console.log(results))
   
  }

  onClickWykop = () => {
    console.clear();
  //  this.setState({ redditPosts: null })
    wykop.search().then(results => this.setState({ wykopPosts: results })& console.log(results))
   
  }

  
  render() {
   // console.clear();
    const posts = this.state.posts;
    const wykopPosts = this.state.wykopPosts;
    return (
      <div>
        <AppHeader/>
       
        <main className="ui main text container">
        <button onClick={this.onClickHot}>HOT</button>;
        <button onClick={this.onClickTop}>TOP</button>;
        <button onClick={this.onClickNew}>NEW</button>;
        <button onClick={this.onClickWykop}>Wykop</button>;
        {/*wykopPosts ? <WykopPostsList wykopPosts={wykopPosts} /> : 'Ładowanie…'*/}
        {posts ? <PostsList posts={posts} /> : 'Ładowanie…'}
         
          
        </main>
      </div>
    );
  }
  
}