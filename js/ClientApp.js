/* global React ReactDOM */

var ce = React.createElement;

var MyTitle = function () {
  return (
    ce('div', null,
      ce('h1', null, 'Check out this component!')
    )
  );
};

var MyFirstComponent = function () {
  return (
    ce('div', null,
      ce(MyTitle, null),
      ce(MyTitle, null),
      ce(MyTitle, null),
      ce(MyTitle, null)
    )
  );
};

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById("app")
);
