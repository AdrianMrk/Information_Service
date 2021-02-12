import * as React from "react";
import { PostsItem } from "./PostsItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from "react-bootstrap";

export class PostsList extends React.Component {

  
  PostsListToPostsItems = (posts) => {

    const currentlanguage = this.props.currentlanguage;

    const preview = posts.preview;
    const author = posts.author;
    const title = posts.title;
    const description = posts.description;
	  const source = posts.source;
    const key = posts.id;
    const date= posts.date;
    const lang= posts.lang;
    const isvideo= posts.is_video;
    
    return <PostsItem 
    key={key} 
    preview={preview} 
    author={author} 
    title={title} 
    description={description} 
    source={source} 
    date={date} 
    isvideo={isvideo} 
    lang={lang} 
    currentlanguage={currentlanguage}
    />;
  };

  render() {
    return (
      <CardColumns>
        {this.props.posts.map(this.PostsListToPostsItems)}
      </CardColumns>
    );
  }
}
