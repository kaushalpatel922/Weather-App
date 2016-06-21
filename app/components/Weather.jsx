var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('app/components/ErrorModal.jsx');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    that.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var temp = this.state.temp;
    var location = this.state.location;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;

    // if isLoading true... render the message.
    function  renderMessage() {
      if (isLoading) {
        return <h4 className="text-center">Fetching Weather...</h4>;
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal  message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <img src = "http://i.imgur.com/ZCRxZUx.gif"/>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {/*Calling the function above to render the display*/}
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
