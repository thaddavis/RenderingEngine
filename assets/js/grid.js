var gridVerts = [];
var gridSize = [];

for ( var x = -40; x < 40; x++ ) {
  for ( var y = -40; y <= 40; y++) {
      gridVerts.push(x);
      gridVerts.push(y);
      gridVerts.push(0);
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      gridVerts.push(10.0);
      
      gridVerts.push(x+1);
      gridVerts.push(y);
      gridVerts.push(0);
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      gridVerts.push(4.0);
  };
};


for ( var x = -40; x <= 40 ; x++ ) {
  for ( var y = -40; y < 40; y++) {
      gridVerts.push(x);
      gridVerts.push(y);
      gridVerts.push(0);
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      gridVerts.push(1.0);
      
      gridVerts.push(x);
      gridVerts.push(y+1);
      gridVerts.push(0);
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      gridVerts.push(Math.random());
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      // gridVerts.push(Math.floor(Math.random() * 255) + 1);
      gridVerts.push(1.0);
  };
};