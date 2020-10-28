import * as React from "react";
import { PostsItem } from "./PostsItems";

export class WykopPostsList extends React.Component {
  wykopPostsToPostsItems = Posts => {
	  
	const avatarUrl = Posts.preview;//contact.picture.thumbnail;
	console.log(avatarUrl);
    const name = Posts.author.login+ " | " +Posts.title //`${title} ${first} ${last}`.trim();

    const phone = truncateString(Posts.description, 150);
	const video = Posts.source_url;
    const key = Posts.id;
	const unixTime= Posts.date;
    return <PostsItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} video={video} unixTime={unixTime}/>;
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