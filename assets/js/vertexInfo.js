var verts = [];

//Grid
for (var i = 0 ; i < gridVerts.length ; i++) {
	verts.push(gridVerts[i]); 	
}

// var AmountOfGridVerts = gridVerts.length / 8;

// var byteBuffer = new ArrayBuffer(AmountOfGridVerts * 16);
// var viewOfVertices = new Int32Array(byteBuffer);

// console.log(byteBuffer);
// console.log(viewOfVertices);

// for(i = 0; i < AmountOfGridVerts; ++i) {
//     viewOfVertices[i * 4 + 0] = gridVerts[i*8 + 1];
//     viewOfVertices[i * 4 + 1] = gridVerts[i*8 + 2];
//     viewOfVertices[i * 4 + 2] = gridVerts[i*8 + 3];

//     // RGBA values expected as 0-255

//     console.log(gridVerts[i*8 + 4]);

//     byteBuffer[i * 16 + 12] = gridVerts[i*8 + 4];

// 	//console.log(byteBuffer[i * 16 + 12]);
//     //debugger;

//     byteBuffer[i * 16 + 13] = gridVerts[i*8 + 5];
//     byteBuffer[i * 16 + 14] = gridVerts[i*8 + 6];
//     byteBuffer[i * 16 + 15] = gridVerts[i*8 + 7];
// }

// console.log(byteBuffer);
// console.log(viewOfVertices);



//console.log("AmountOfGridVertices: " + AmountOfGridVerts);

//console.log("verts consists of: ");
//console.log(verts);
//console.log("Type of verts is: " + typeof verts);
