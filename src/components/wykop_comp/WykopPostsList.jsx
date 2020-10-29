import * as React from "react";
import { PostsItem } from "../PostsItems";

export class WykopPostsList extends React.Component {
  wykopPostsToPostsItems = Posts => {
    
    const key = Posts.id;
	  const preview = Posts.preview+"|";//contact.picture.thumbnail;
  	console.log(preview);
    const name = Posts.author.login+ " | " +Posts.title //`${title} ${first} ${last}`.trim();
    const description = truncateString(Posts.description, 150);
	  const source = Posts.source_url;
	  const date= Posts.date;
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

function truncateString(myString, limit) {
  const shortened = myString.indexOf(' ', limit);
  if (shortened === -1) return myString;
  return myString.substring(0, shortened);
}