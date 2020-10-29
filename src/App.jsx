import * as React from "react";
import { RedPostsList } from "./components/reddit_comp/RedPostsList";
import { WykopPostsList } from "./components/wykop_comp/WykopPostsList";
import { AppHeader } from "./AppHeader";
import reddit from "./components/reddit_comp/reddit";
import wykop from "./components/wykop_comp/wykop";

export class App extends React.Component {
  
  state = {
    redditPosts: null,
    wykopPosts: null,
  };

 // componentDidMount() {

  //  reddit.search("hot","10").then(results => this.setState({ redditPosts: results })& console.log(results))





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
    console.clear();
	  this.setState({ redditPosts: null })
    reddit.search("hot","10").then(results => this.setState({ redditPosts: results })& console.log(results))
  
  }
  onClickTop = () => {
    console.clear();
    reddit.search("top","10").then(results => this.setState({ redditPosts: results })& console.log(results))
    

  }
  onClickNew = () => {
    console.clear();
    reddit.search("new","8").then(results => this.setState({ redditPosts: results })& console.log(results))
   
  }

  onClickWykop = () => {
    console.clear();
  //  this.setState({ redditPosts: null })
    wykop.search().then(results => this.setState({ wykopPosts: results })& console.log(results))
   
  }

  render() {
    const redditPosts = this.state.redditPosts;
    const wykopPosts = this.state.wykopPosts;
    return (
      <div>
        <AppHeader/>
        
        <main className="ui main text container">
        <button onClick={this.onClickHot}>HOT</button>;
        <button onClick={this.onClickTop}>TOP</button>;
        <button onClick={this.onClickNew}>NEW</button>;
        <button onClick={this.onClickWykop}>Wykop</button>;
        {wykopPosts ? <WykopPostsList wykopPosts={wykopPosts} /> : 'Ładowanie…'}
        {redditPosts ? <RedPostsList redditPosts={redditPosts} /> : 'Ładowanie…'}
         
          
        </main>
      </div>
    );
  }
  
}