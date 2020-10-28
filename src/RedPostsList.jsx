import * as React from "react";
import { PostsItem } from "./PostsItems";

export class RedPostsList extends React.Component {
  redPostsToPostsItems = Posts => {
	  
	const avatarUrl = Posts.url;//contact.picture.thumbnail;
	console.log(avatarUrl);
    const name = Posts.author+ " | " +Posts.title //`${title} ${first} ${last}`.trim();
    const phone = truncateString(Posts.selftext, 150);
	const video = Posts.url;
    const key = Posts.url;
	const unixTime= Posts.created_utc
    return <PostsItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} video={video} unixTime={unixTime}/>;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.redditPosts.map(this.redPostsToPostsItems)}
      </ul>
    );
  }
}

function truncateString(myString, limit) {
  const shortened = myString.indexOf(' ', limit);
  if (shortened === -1) return myString;
  return myString.substring(0, shortened);
}