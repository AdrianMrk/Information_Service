import * as React from "react";

export default {
    search: function(props,props2) {
      return fetch(
        `http://www.reddit.com/${props}.json?q=$g=PL&limit=${props2}`
      )
        .then(res => res.json())
        .then(data => {
          return data.data.children.map(data => data.data);
        })
        .catch(err => console.log(err));
    },
    allert: function(props) {    
      return ( 
      <div>
        <img src='https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg' className="ui small rounded image" alt="Error" />
      </div>)
      }
      
    }
  
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