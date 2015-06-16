/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with griddle component */

var fakeData = require('../data/fakeData.js').fakeData;
var resultsPerPage = 200;

var ReactApp = React.createClass({displayName: "ReactApp",
  
  getInitialState: function(){
      return {
          data: this.props.data
      };
  },

  componentDidMount: function () {
    //console.log(fakeData);
  },

  handleClick: function(ev){
      this.setState({data: "Clickedddd!"});
  },

  render: function () {

    var renderRows = fakeData.map(function(row){
      return (
        React.createElement("tr", {key: row.id}, 
          React.createElement("td", null, row.id), 
          React.createElement("td", null, row.name), 
          React.createElement("td", null, row.city), 
          React.createElement("td", null, row.state), 
          React.createElement("td", null, row.country), 
          React.createElement("td", null, row.company), 
          React.createElement("td", null, row.favoriteNumber)
        )
        );
    });

    return (
      React.createElement("div", {id: "table-area"}, 
        React.createElement("h1", null, this.state.data), 
        React.createElement("button", {title: "Wont work if JS is disabled because event handlers won't work on the server implementation!", className: "btn btn-primary", onClick: this.handleClick}, "Click"), 
          React.createElement("table", {className: "table"}, 
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("th", null, "id"), 
                React.createElement("th", null, "Name"), 
                React.createElement("th", null, "City"), 
                React.createElement("th", null, "State"), 
                React.createElement("th", null, "Country"), 
                React.createElement("th", null, "Company"), 
                React.createElement("th", null, "Favorite number")
              )
            ), 
            React.createElement("tbody", null, 
              renderRows
            )
          )
      )
    );
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;