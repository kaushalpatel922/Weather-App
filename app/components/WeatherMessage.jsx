var React = require('react');

var WeatherMessage = (props) => {
  var temp = props.temp;
  var location = props.location;
  return(
    <h3 className="text-center">It's {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;
