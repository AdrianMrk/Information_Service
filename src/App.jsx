import * as React from "react";
import { PostsList } from "./components/PostsList";
import firebaseData from "./components/FirebaseData";
import { Col, Container,Navbar,Nav} from "react-bootstrap";
import './index.css'
import Language from '@material-ui/icons/Language';

export class App extends React.Component {
  
  state = {
    posts: null,
    currentlanguage: "PL",
  };

  refresh = () => {
    window.location.reload();
  }

  componentDidMount()
  {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getRSS();
    promisedPost
    .then(results => this.setState({ posts: results }))
    .catch(error => console.log( error));
  }

  onClickHot = () => {
    
    this.setState({ posts: null });
    
   const promisedPost = firebaseData.getHot();
    promisedPost
    .then(results => this.setState({ posts: results }))
    .catch(error => console.log( error));
    
  }
 
  onClickTop = () => {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getTop();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));

  }
  onClickNew = () => {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getNew();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));
  }

  onClickRSS = () => {
    this.setState({ posts: null });
    
    const promisedPost = firebaseData.getRSS();
     promisedPost
     .then(results => this.setState({ posts: results }))
     .catch(error => console.log( error));
  }

  chooseLang = () => {
    if(this.state.currentlanguage === "PL")
    {let x = document.getElementById("changeLangButton")
    x.firstChild.style.display ="block"
    x.lastChild.style.display ="none"
    this.setState({ currentlanguage: "ENG" })}
    else
    {this.setState({ currentlanguage: "PL" }) 
    let x = document.getElementById("changeLangButton")
    x.firstChild.style.display ="none"
    x.lastChild.style.display ="block"
    }
  }
  
  render() {
   // console.clear();
   //<main className="ui main text container">
    const posts = this.state.posts;
    const currentlanguage = this.state.currentlanguage;
    return (
      <div>
      <Col md={{ span: 10, offset: 1 }}>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="header">
          <Navbar.Brand href="#home" onClick={this.refresh}><img src="logo.png" className="float-right" alt="" style={{ width: '200px',borderRadius:'10px', margin:'-6px' }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#hot" onClick={this.onClickHot} >Gorące</Nav.Link>
              <Nav.Link href="#top" onClick={this.onClickTop}>Najlepsze</Nav.Link>
              <Nav.Link href="#new" onClick={this.onClickNew}>Najnowsze</Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link eventKey={2} href="#memes"> 
              <div  id="changeLangButton" onClick={this.chooseLang}>
                <Language style={{display:'none'}} /><p><b>PL</b></p>
              </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col md={{ span: 8, offset: 2 }} id="main" >  
       <Container >
               
          {posts ? <PostsList posts={posts} currentlanguage={currentlanguage}/> : ''}         
          
        </Container>
      </Col>
      </div>
    );
  }
  
}