import db from "./config";

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
  },
  getTop: function() {
    return new Promise((resolve) => {
      let newPosts = [];
      let dbref = db.ref("/TopPosts")

      dbref.once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {            
              newPosts.push(childSnapshot.val());
    
            })
         }).then(() => {resolve(newPosts);})
    });
  },
  getNew: function() {
    return new Promise((resolve) => {
      let newPosts = [];
      let dbref = db.ref("/NewPosts")

      dbref.once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {            
              newPosts.push(childSnapshot.val());
    
            })
         }).then(() => {resolve(newPosts);})
    });
  }
}
