var MouseX = 0;
var MouseY = 0;

function startupCanvases(canvas) { 
            canvas.width  = window.innerWidth/1.01;
            canvas.height = window.innerHeight/1.15;
}

function resize_canvas() {
            var canvas = document.getElementById("canvas");
            canvas.width  = window.innerWidth/1.01;
            canvas.height = window.innerHeight/1.15;
}

document.getElementById("canvas").onmousemove = function(e) {
    MouseX = e.pageX;
    MouseY = e.pageY;
}

var CenterCanvasX = 0; 
var CenterCanvasY = 0; 


