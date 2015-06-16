var React = require('react/addons');
var ReactApp = React.createFactory(require('./components/ReactApp'));

var mountNode = document.getElementById("react-main-mount");

var data = JSON.parse(mountNode.dataset.json);

React.render(ReactApp({data:data}), mountNode);