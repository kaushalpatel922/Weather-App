var React = require('react');

var WeatherMessage = (props) => {
  var temp = props.temp;
  var location = props.location;
  return(
    <h4 className="text-center">It feels like {temp}&#8457; in {location}.</h4>
  )
}

module.exports = WeatherMessage;
