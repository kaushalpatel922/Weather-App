var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations.</p>
      <ul>
        <li>
          <Link to="/?location=Laurel">Laurel, MD</Link>
        </li>
        <li>
          <Link to="/?location=Washington">Washington, DC</Link>
        </li>
        <li>
          <Link to="/?location=New York">New York, NY</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
