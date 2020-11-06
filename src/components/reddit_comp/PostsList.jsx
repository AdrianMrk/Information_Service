import * as React from "react";
import { PostsItem } from "../PostsItems";

export class PostsList extends React.Component {
  PostsListToPostsItems = Posts => {
    var preview = Posts.preview
	  //contact.picture.thumbnail;
   
  	//console.log(preview);
    const name = Posts.author+ " | " +Posts.title; //`${title} ${first} ${last}`.trim();
    const description = Posts.description;
	  const source = Posts.source;
    const key = Posts.id;
    const date= Posts.date;
    const isvideo= Posts.is_video;
  //  if(Posts.preview)
  //  console.log(Posts.preview.images[0].source.url);
    return <PostsItem key={key} preview={preview} name={name} description={description} source={source} date={date} isvideo={isvideo}/>;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.posts.map(this.PostsListToPostsItems)}
      </ul>
    );
  }
}
