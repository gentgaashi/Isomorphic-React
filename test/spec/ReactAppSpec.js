"use strict";

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ReactApp = require('../../app/components/ReactApp.js');

describe("ReactApp Test",function(){
    beforeEach(function() {
        
    });


    it("Check Component Assignment", function () {
        var component = <ReactApp/>;
         TestUtils.renderIntoDocument(component);
         expect(component).toBeTruthy();
    });

    // it("Click", function () {
    //     var label  = <Label>Some Text We Need to Test</Label>;
    //     ReactTestUtils.renderIntoDocument(label);

    //     ReactTestUtils.Simulate.click(label.refs.p);
    //     expect(label.refs.p.props.children).toBe("Text After Click");
    // });

});
