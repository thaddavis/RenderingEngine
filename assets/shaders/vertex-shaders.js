var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'attribute vec4 a_Color;\n' +
  //'attribute float a_Size;\n' +
  'uniform mat4 u_ModelMatrix;\n' +
  'uniform mat4 u_ViewMatrix;\n' +
  'uniform mat4 u_ProjMatrix;\n' + 
  'varying vec4 v_Color;\n' +
  'void main() {\n' +
  '  gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;\n' +
  //'  gl_Position = u_ModelMatrix * a_Position;\n' +
  //'  gl_PointSize = a_Size;\n' +
  '  v_Color = a_Color;\n' +
  '}\n';


function initVertexBuffers(gl) {

  var vertexBuffer = gl.createBuffer();  
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

  // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(viewOfVertices), gl.STATIC_DRAW);
  
  var FSIZE = 4;
  //console.log(FSIZE);

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 8, FSIZE * 0);
  gl.enableVertexAttribArray(a_Position);

  var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  if (a_Color < 0) {
    console.log('Failed to get the storage location of a_Color');
    return -1;
  }
  gl.vertexAttribPointer(a_Color, 4, gl.FLOAT, false, FSIZE * 8, FSIZE * 3);
  gl.enableVertexAttribArray(a_Color);


  // var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  // if (a_Position < 0) {
  //   console.log('Failed to get the storage location of a_Position');
  //   return -1;
  // }
  // //gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 8, FSIZE * 0);
  // gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 16, 0);
  // gl.enableVertexAttribArray(a_Position);

  // var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  // if (a_Color < 0) {
  //   console.log('Failed to get the storage location of a_Color');
  //   return -1;
  // }
  // //gl.vertexAttribPointer(a_Color, 4, gl.FLOAT, false, FSIZE * 8, FSIZE * 3);
  // gl.vertexAttribPointer(a_Color, 4, gl.UNSIGNED_BYTE, false, 16, 12);
  // gl.enableVertexAttribArray(a_Color);
  
  /*
  var a_Size = gl.getAttribLocation(gl.program, 'a_Size');
  if (a_Size < 0) {
    console.log('Failed to get the storage location of a_Size');
    return -1;
  }
  gl.vertexAttribPointer(a_Size, 1, gl.FLOAT, false, FSIZE * 8, FSIZE * 7);
  gl.enableVertexAttribArray(a_Size);
  */

  return;
}