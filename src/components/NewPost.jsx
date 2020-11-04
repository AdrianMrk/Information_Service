import * as React from "react";
import { PostsItem } from "../components/PostsItems";

export class WykopPostsList extends React.Component {
  
  wykopPostsToPostsItems = Posts => {
    console.log("twoj stary");
    var preview = Posts.preview
  	console.log(Posts);
    const name = Posts.author+ " | " +Posts.title //`${title} ${first} ${last}`.trim();
    const description = "no elo";
	  const source = Posts.url;
    const key = Posts.id;
    const date= "no elo";
  //  if(Posts.preview)
  //  console.log(Posts.preview.images[0].source.url);
 // return null;
    return <PostsItem key={key} preview={preview} name={name} description={description} source={source} date={date}/>;
  };
  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.wykopPosts.map(this.wykopPostsToPostsItems)}
      </ul>
    );
  }
}