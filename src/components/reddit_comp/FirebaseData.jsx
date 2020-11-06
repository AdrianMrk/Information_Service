import db from "../config";



export default {
  getHot: function() {
    return new Promise((resolve) => {
      let newPosts = [];
      let dbref = db.ref("/HotPosts")

      dbref.once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {            
              newPosts.push(childSnapshot.val());
    
            })
         }).then(() => {resolve(newPosts);})
    });
    }
}
























/*
export class Reddit extends React.Component {

  state = {
    redditPosts: [],
  };

  render(){

    var redditPosts = this.state.redditPosts;


 /*   db.ref("/HotPosts").once("value", (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
      //const childKey = childSnapshot.key;
      //redditPosts = childSnapshot.val();
      redditPosts.push(childSnapshot.val());
      
    });*/
/*
    var rootRef = db.ref();
    rootRef.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        //const childKey = childSnapshot.key;
        //redditPosts = childSnapshot.val();
        redditPosts.push(childSnapshot.val());
        
      });
  }.then(() => { console.log(redditPosts)}),);

  
//  var myJsonString = JSON.stringify(redditPosts);
//  console.log(redditPosts);
  setTimeout(function(){ console.log(redditPosts); }, 3000);
  //  if(Posts.preview)
  //  console.log(Posts.preview.images[0].source.url);
 //   return {redditPosts > 9 ? <WykopPostsList wykopPosts={redditPosts} /> : 'Ładowanie…'} 
  
      return null; 
  };

}
export default Reddit



















/*
export default {
  search: function() {



    
      db.ref("/HotPosts").on("value", (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
          
         
          console.log(childData.title);
       /* const convertedMessages = Object.entries(fbMessages || {}).map(
          ([id, message]) => ({
            ...message,
            id
          })
        );
        
      });})
      
      return (
        <div className="App">
          
          ))
         
          
        </div>
      )
          }
        )
      })}}

      
    
    
    
    
    
    
    
    
      /*
   db.ref(`/HotPosts/`).once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          
         
          console.log(childData.title);

      });
      });*/
      
     
      /*return fetch(
        `http://www.reddit.com/${props}.json?q=$g=PL&limit=${props2}`
      )
        .then(res => res.json())
        .then(data => {
          return data.data.children.map(data => data.data);
        })
        .catch(err => console.log(err));*/
    
    /*
      },
    allert: function(props) {    
      return ( 
      <div>
        <img src='https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg' className="ui small rounded image" alt="Error" />
      </div>)
      }
      
    }*/
  
    /*
    
      fetch("http://www.reddit.com/${props}.json?q=$g=PL&limit=10")
        .then(res => res.json())
        .then(data => this.setState({ contacts: data.data.children })& console.log(data.data.children));
    
  
    render() {
      const contacts = this.state.contacts;
  
      return (
        <div>
          <main className="ui main text container">
            {contacts ? <ContactsList contacts={contacts} /> : 'Ładowanie…'}
          </main>
        </div>
      );
    }
  
  }*/