/** @jsx React.DOM */

var React = require('react/addons');

/* create factory with griddle component */

var fakeData = require('../data/fakeData.js').fakeData;
var resultsPerPage = 200;

var ReactApp = React.createClass({
  
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
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.city}</td>
          <td>{row.state}</td>
          <td>{row.country}</td>
          <td>{row.company}</td>
          <td>{row.favoriteNumber}</td>
        </tr>
        );
    });

    return (
      <div id="table-area">
        <h1>{this.state.data}</h1>
        <button title="Wont work if JS is disabled because event handlers won't work on the server implementation!" className="btn btn-primary" onClick={this.handleClick}>Click</button>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Company</th>
                <th>Favorite number</th>
              </tr>
            </thead>
            <tbody>
              {renderRows}
            </tbody>
          </table>
      </div>
    );
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;