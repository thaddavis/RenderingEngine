function draw(gl, canvas, u_ModelMatrix, u_ViewMatrix, u_ProjMatrix) {

    gl.clear(gl.COLOR_BUFFER_BIT);
    updateDebugDiv(gl);
    eventHandlers();
   
    
   
    // console.log("****************");

    // console.log("Camera.camera_pitch in drawLoop");
    // console.log(Camera.camera_pitch);

    // //console.log(Camera.orientation);
    // var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], 
    //   Camera.look['y'] - Camera.pos['y'], 
    //     Camera.look['z'] - Camera.pos['z']);
    // //forwardVec.scaleVec(-deltaTime/100);

    // console.log("forwardVec in drawLoop: ");
    // console.log(forwardVec);
 
    // var rightVec = (forwardVec).vectorProduct(Camera.up);
    
    // console.log("rightVec in drawLoop: ");
    // console.log(rightVec);

    // console.log("upVec in drawLoop: ");
    // console.log(Camera.up);

    var modelMatrix = new Matrix4();
    var viewMatrix = new Matrix4(); 
    var projMatrix = new Matrix4();

    gl.viewport(0 , 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    //modelMatrix = Camera.orientation.quatToMatrix4();

    viewMatrix.setLookAt(Camera.pos['x'], Camera.pos['y'], Camera.pos['z'], 
      Camera.look['x'], Camera.look['y'], Camera.look['z'], 
      Camera.up['x'], Camera.up['y'], Camera.up['z']);
    
    projMatrix.setPerspective(30, canvas.width/canvas.height, 1, 100);
  
    gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements);
    gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements);

    modelMatrix.setIdentity();
    gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);

    gl.drawArrays(gl.LINES, 0, verts.length/8);

    //debugger;  
};

function updateDebugDiv(gl) {
  // console.log('updateCamerapos was called');
  CenterCanvasX = gl.drawingBufferWidth/2; CenterCanvasY = gl.drawingBufferHeight/2;
  var camerapos = document.getElementById('cameraposition');
  camerapos.innerHTML = 'Camera X Position: ' + Camera.pos['x'].toFixed(10) + 
                        ' RArrow/LArrow to add/sub 0.1 to Cam X Pos ' + 
                        '---LookAtXposition: ' + Camera.look['x'].toFixed(10) + '<br>' +
                        'Camera Y Position: ' + Camera.pos['y'].toFixed(10) + 
                        ' UpArrow/DownArrow to add/sub 0.1 to Cam Y Pos ' + 
                        '---LookAtYposition: ' + Camera.look['y'].toFixed(10) + '<br>' +
                        'Camera Z Position: ' + Camera.pos['z'].toFixed(10) + 
                        " 'A' / 'Z' to add/sub 0.1 to Cam Z Pos " + 
                        '---LookAtZposition: ' + Camera.look['z'].toFixed(10) + '<br>' +
                        'MouseX: ' + MouseX + ' --- ' +  'MouseY: ' + MouseY + ' --- ' + 
                        'CenterCanvasX: ' + gl.drawingBufferWidth/2 + ' --- ' +  
                        'CenterCanvasY: ' + gl.drawingBufferHeight/2;
}

function updateCamera(gl) {

}



