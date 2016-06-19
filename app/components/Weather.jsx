var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    that.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
        alert(errorMessage);
    });
  },
  render: function() {
    var temp = this.state.temp;
    var location = this.state.location;
    var isLoading = this.state.isLoading;

    // if isLoading true... render the message.
    function  renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {/*Calling the function above to render the display*/}
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
