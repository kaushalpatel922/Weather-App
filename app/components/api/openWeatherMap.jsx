var axios = require('axios');


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //making a call and fetching the result
    return axios.get(requestUrl).then(function(res) {
      // check for all errors possible
      if (res.data.cod && res.data.message) {
        //if errors are found, display the error.
        throw new Error(res.data.message);
      } else {
        //show the temperature
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });

  }
}
