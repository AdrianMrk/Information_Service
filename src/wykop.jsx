import MD5 from "crypto-js/md5";



export default {
    search: function() {
        var url = "https://a2.wykop.pl/Hits/Popular/appkey/GHTJDTT9bh"
        var secret = "8SfP9JoJuH"
        console.log(MD5(secret+url).toString());
      return fetch("https://cors-anywhere.herokuapp.com/https://a2.wykop.pl/Hits/Popular/appkey/GHTJDTT9bh", {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apisign': MD5(secret+url)
        }
    })
        .then(res => res.json())
        .then(data => {
          return data.data.map(data => data);
        })
        .catch(err => console.log(err));
    }
}
  
