import * as React from "react";
import { PostsList } from "./components/PostsList";
import firebaseData from "./components/FirebaseData";
import Loading from './components/Load_Anim'
import { Col, Container,Navbar,Nav} from "react-bootstrap";
import Language from '@material-ui/icons/Language';


export class App extends React.Component {
  
  state = {
    posts: null,
    currentlanguage: null,
  };

  componentWillMount() {    
    let sessionlanguage = sessionStorage.getItem("Lang");
    sessionlanguage ? this.setState({ currentlanguage: sessionlanguage,}) : this.setState({ currentlanguage: 'PL'})
    console.log(sessionlanguage)   
  }

  componentDidMount() {  
    const promisedPost = firebaseData.getRSS();
    promisedPost
    .then(results => this.setState({ posts: results }))
    .catch(error => console.log( error));
    this.chooseLang()   
  }
  
  refresh = () => {
    window.location.reload();
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
    if(this.state.currentlanguage === "ENG")
      {let x = document.getElementById("changeLangButton");
      x.firstChild.style.display ="none";
      x.lastChild.style.display ="block";
      this.setState({ currentlanguage: "PL" });
      sessionStorage.setItem("Lang", "ENG");}
    else
    { 
      let x = document.getElementById("changeLangButton");
      x.firstChild.style.display ="block";
      x.lastChild.style.display ="none";
      this.setState({ currentlanguage: "ENG" });
      sessionStorage.setItem("Lang", "PL");
    }
  }
  
  render() {
   // console.clear();
   //<main className="ui main text container">
    const posts = this.state.posts;
    const currentlanguage = this.state.currentlanguage;
    return (
    <div>
      <div id="header">
      <Col md={{ span: 10, offset: 1 }} xs={{ span: 12, offset: 0 }} >
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand onClick={this.refresh}><img src="logo.png" alt="" style={{ width: '180px',borderRadius:'0px 0px 0px 0px', margin:'0px',cursor:'pointer' }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={this.onClickHot}>Gorące</Nav.Link>
              <Nav.Link onClick={this.onClickTop}>Najlepsze</Nav.Link>
              <Nav.Link onClick={this.onClickNew}>Najnowsze</Nav.Link>
            </Nav>
            <Nav>
              
              <Nav.Link> 
              <div  id="changeLangButton" onClick={this.chooseLang}>
                <Language style={{display:'none'}} /><p><b>PL</b></p>
              </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      </div>
      <Col md={{ span: 8, offset: 2 }} sm={{ span: 12, offset: 0 }} id="main" >  
       <Container >
          
          {posts ? <PostsList posts={posts} currentlanguage={currentlanguage}/> : <Loading />}         
        </Container>
      </Col>
    </div>
    );
  }
}