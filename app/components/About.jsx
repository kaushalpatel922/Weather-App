var React = require('react');

// Stateless
var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>I am Kaushal Patel - Full Stack Web Developer.</p>
      <p>This is a weather application built using:</p>
      <ul>
        <li>React - Javascript Framework</li>
        <li>Open Weather Map API</li>
      </ul>
      <p>You can checkout my website at <a href="http://www.kaushalapatel.com">Kaushal Patel</a></p>
    </div>
  )
};

module.exports = About;
