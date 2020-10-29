import * as React from "react";
import { PostsItem } from "../PostsItems";

export class RedPostsList extends React.Component {
  redPostsToPostsItems = Posts => {
    var preview = Posts.url
	  if(Posts.media)
    preview = Posts.url+"|"+Posts.media.reddit_video.fallback_url;//contact.picture.thumbnail;
   
  	console.log(preview);
    const name = Posts.author+ " | " +Posts.title //`${title} ${first} ${last}`.trim();
    const description = truncateString(Posts.selftext, 150);
	  const source = Posts.url;
    const key = Posts.id;
    const date= timeConverter(Posts.created_utc);
  //  if(Posts.preview)
  //  console.log(Posts.preview.images[0].source.url);
    return <PostsItem key={key} preview={preview} name={name} description={description} source={source} date={date}/>;
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

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var month  = a.getMonth()+1 
  var time = a.getDate() + '-' + month + '-' + a.getFullYear() + ' ' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds() ;
  return time;
}