console.log('App.js is running!');

// JSX - JavaScript XML
//var template = <p>This is app.js</p>;
var template = React.createElement(
  "h1",
  { id: "someid" },
  "This is app.js"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);