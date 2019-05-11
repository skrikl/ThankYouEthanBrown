//Everything that goes inside (document).ready will be executed after the document is downloaded and fully prepared
$(document).ready(function() {
    // Use strict can either go as a first string of a script or a first string in a function. In function it makes only
    // that function's body to be a subject of strict mode
    'use strict';
    // PaperJS boilerplate
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = '16';
    text.content = "Hello World";

    // Tool() is an object that handles user input in PaperJS
    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'red';
    }
    paper.view.draw();
});