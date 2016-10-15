var axios = require('axios');

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getPlayersInfo: function(username) {
    // api call to github using axios
    return getUserInfo(username)
    .then(function (info) {
      return info.data;
    })
    .catch(function (err) {
      console.warn('Error in getPlayersInfo: ', err);
    });
  }
};


module.exports = helpers;
