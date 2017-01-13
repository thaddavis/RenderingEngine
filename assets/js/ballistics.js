var AmmoJSON = [
{
    "type" : "PISTOL", 
    "vertexInfo" : "0.0, 3.5, 2.0, 0.3, 0.8, 0.0, 1.0, 22.0" // pos, color, size
},
{
    "type" : "PISTOL", 
    "vertexInfo" : "0.2, 3.3, 2.0, 0.3, 0.8, 0.0, 1.0, 22.0" // pos, color, size
},
{
    "type" : "ARTILLERY", 
    "vertexInfo" : "0.0, 3.3, 1.0, 0.0, 1.0, 0.7, 1.0, 12.0" // pos, color, size
},
{
    "type" : "ARTILLERY", 
    "vertexInfo" : "0.2, 3.5, 1.0, 0.0, 1.0, 0.7, 1.0, 12.0" // pos, color, size
},
{
    "type" : "CHARLIEBULLET", 
    "vertexInfo" : "1.0, 3.2, 2.,0 0.0, 1.0, 0.2, 1.0, 12.0" // pos, color, size
},
{
    "type" : "CHARLIEBULLET", 
    "vertexInfo" : "1.2, 3.5, 2.0, 0.0, 1.0, 0.2, 1.0, 12.0" // pos, color, size
}
];

var Ammo = [];

for (var i = 0 ; i < AmmoJSON.length; i++) {
	var Particle = new MYAPP.Particle();

	switch(AmmoJSON[i]["type"]) {
    	case "PISTOL":
    		vertexInfo = AmmoJSON[i]["vertexInfo"].split(",");
        	Particle.inverseMass = (1/2.0);
        	Particle.position.x = vertexInfo[0]; Particle.position.y = vertexInfo[1]; Particle.position.z = vertexInfo[2];
        	Particle.velocity.x = 0.0; Particle.velocity.y = 0.02; Particle.velocity.z = 0.00055;
        	Particle.acceleration.x = 0.002; Particle.acceleration.y = -0.001; Particle.acceleration.z = -0.003;
        	Particle.damping = 0.99;
        	Ammo.push(Particle);
        	break;
    	case "ARTILLERY":
        	vertexInfo = AmmoJSON[i]["vertexInfo"].split(",");
        	Particle.inverseMass = (1/200.0);
        	Particle.position.x = vertexInfo[0]; Particle.position.y = vertexInfo[1]; Particle.position.z = vertexInfo[2];
        	Particle.velocity.x = 0.0; Particle.velocity.y = 0.03; Particle.velocity.z = 0.040;
        	Particle.acceleration.x = 0.0005; Particle.acceleration.y = -0.002; Particle.acceleration.z = -0.003;
        	Particle.damping = 0.99;
        	Ammo.push(Particle);
        	break;
        case "CHARLIEBULLET":
            vertexInfo = AmmoJSON[i]["vertexInfo"].split(",");
            Particle.inverseMass = (1/200.0);
            Particle.position.x = vertexInfo[0]; Particle.position.y = vertexInfo[1]; Particle.position.z = vertexInfo[2];
            Particle.velocity.x = 0.0; Particle.velocity.y = -0.03; Particle.velocity.z = -0.040;
            Particle.acceleration.x = -0.0005; Particle.acceleration.y = -0.002; Particle.acceleration.z = -0.003;
            Particle.damping = 0.99;
            Ammo.push(Particle);
            break;
	}	
};


