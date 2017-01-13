// Fragment shader program
var FSHADER_SOURCE =
  '#if GL_FRAGMENT_PRECISION_HIGH == 1\n' +
  'precision highp float;\n' +
  '#else\n' +
  'precision mediump float;\n' +
  '#endif\n' +

  'varying vec4 v_Color;\n' +
  'void main() {\n' +
  '  gl_FragColor = v_Color;\n' +
  '}\n';