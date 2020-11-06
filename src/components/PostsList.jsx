import * as React from "react";
import { PostsItem } from "./PostsItems";

export class PostsList extends React.Component {
  PostsListToPostsItems = Posts => {

    const preview = Posts.preview;
    const name = Posts.author+ " | " +Posts.title;
    const description = Posts.description;
	  const source = Posts.source;
    const key = Posts.id;
    const date= Posts.date;
    const isvideo= Posts.is_video;
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
