var theta=0 
for(var radius=60.0; radius>1.0; radius-=0.3) {
  colors.push(radius/60.0, 0.3, 1-(radius/60.0));
  verts.push(200+radius*Math.cos(theta),200+radius*Math.sin(theta));
  theta+=0.1;
}
var numPoints = colors.length / 3;