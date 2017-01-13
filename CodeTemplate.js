//GLOBALS
var CameraX = 1.71;
var CameraY = -0.3;
var CameraZ = 0.58;
var LookAtX = 1.67;
var LookAtY = -0.09;
var LookAtZ = 0.52;
var UpVecX = 0;
var UpVecY = 0;
var UpVecZ = 1;
var xAxis = new MYAPP.Vector3(1,0,0);
var yAxis = new MYAPP.Vector3(0,1,0);
var zAxis = new MYAPP.Vector3(0,0,1);
var MouseSensitivity = 1;
var CurrentRotationAboutX = 0.0;
var MouseDirection = new MYAPP.Vector3(0,0,0);
//GLOBALS

var Camera = new MYAPP.Camera(new MYAPP.Vector3(CameraX,CameraY,CameraZ), 
  new MYAPP.Vector3(LookAtX,LookAtY,LookAtZ), new MYAPP.Vector3(UpVecX,UpVecY,UpVecZ));

var g_last = Date.now();
var deltaTime;
function animate() {
  var now = Date.now();
  deltaTime = now - g_last;
  g_last = now;

};

function main() {

  var canvas = document.getElementById('webgl');
  startupCanvases(canvas);  

  window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
  window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }
  var n = initVertexBuffers(gl);
  if (n < 0) {
    console.log('Failed to set the vertex information');
    return;
  }
  var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');

  // get the storage locations of u_ViewMatrix and u_ProjMatrix
  var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
  var u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
  if (!u_ViewMatrix || !u_ProjMatrix) { 
    console.log('Failed to get the storage location of u_ViewMatrix and/or u_ProjMatrix');
    return;
  }

  gl.clearColor(0, 0, 0, 1);

  var tick = function() {
    animate();  
    draw(gl, canvas, u_ModelMatrix, u_ViewMatrix, u_ProjMatrix);   
    requestAnimationFrame(tick, canvas); 
  };
  tick();
  
};
