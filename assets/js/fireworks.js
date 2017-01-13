var FireworksJSON = [{
    "name" : "FIREWORKA",
    "type" : "0", 
    "minAge" : "400.5",
    "maxAge" : "1000.4",
    "minVelocity" : "-2, 5, -2",
    "maxVelocity" : "4, 8, 2",
    "damping" : "0.9",
    "payloadCount" : "2",
    "payloads" : "[3,3]_[3,4]", // [type, count]
    "vertexInfo" : "0.0, 3.5, 2.0, 1.0, 0.0, 0.2, 0.5, 22.0"
},
{
    "name" : "FIREWORKB",
    "type" : "1", 
    "minAge" : "400.5",
    "maxAge" : "1000.0",
    "minVelocity" : "-3, 1, -3",
    "maxVelocity" : "12, 22, 2",
    "damping" : "0.9",
    "payloadCount" : "2",
    "payloads" : "[0,2]_[1,6]", // [type, count]
    "vertexInfo" : "0.2, 3.3, 2.0, 1.0, 0.0, 0.2, 0.5, 22.0"
},
{
    "name" : "FIREWORKC", 
    "type" : "2",        
    "minAge" : "400.5",
    "maxAge" : "1000.5",
    "minVelocity" : "-8, -3, -3",
    "maxVelocity" : "8, 3, 3",
    "damping" : "0.9",
    "payloadCount" : "1",
    "payloads" : "[1,3]", // [type, count]
    "vertexInfo" : "0.0, 3.3, 1.0, 1.0, 0.0, 0.2, 0.5, 22.0"
},
{
    "name" : "FIREWORKD",
    "type" : "3", 
    "minAge" : "400.5",
    "maxAge" : "1100.4",
    "minVelocity" : "-13, 1, -3",
    "maxVelocity" : "13, 3, 1",
    "damping" : "0.9",
    "payloadCount" : "1",
    "payloads" : "[2,3]", // [type, count]  
    "vertexInfo" : "1.0, 3.2, 2.0, 1.0, 0.0, 0.2, 0.5, 22.0"
}];

var Fireworks = [];

for (var i = 0 ; i < FireworksJSON.length; i++) {
    var Firework = new MYAPP.Firework();
    Firework.type = FireworksJSON[i]["type"];
    Firework.minAge = FireworksJSON[i]["minAge"];
    Firework.maxAge = FireworksJSON[i]["maxAge"];
    Firework.age = (Math.random() * (Firework.maxAge - Firework.minAge) + parseFloat(Firework.minAge));

    Firework.minVelocity = FireworksJSON[i]["minVelocity"];
    Firework.maxVelocity = FireworksJSON[i]["maxVelocity"];
    Firework.damping = FireworksJSON[i]["damping"];
    Firework.payloadCount = FireworksJSON[i]["payloadCount"];
    Firework.payload = FireworksJSON[i]["payloads"];
    Firework.parent = null;

    PositionInfo = FireworksJSON[i]["vertexInfo"].split(",");
    Firework.position.x = PositionInfo[0]; Firework.position.y = PositionInfo[1]; Firework.position.z = PositionInfo[2];

    minVelocityInfo = FireworksJSON[i]["minVelocity"].split(",");
    maxVelocityInfo = FireworksJSON[i]["maxVelocity"].split(",");
    
    Firework.velocity.x =  Math.random() * (maxVelocityInfo[0] - minVelocityInfo[0]) + parseFloat(minVelocityInfo[0]) ;
    Firework.velocity.y =  Math.random() * (maxVelocityInfo[1] - minVelocityInfo[1]) + parseFloat(minVelocityInfo[1]) ; 
    Firework.velocity.z =  Math.random() * (maxVelocityInfo[2] - minVelocityInfo[2]) + parseFloat(minVelocityInfo[2]) ;

    Firework.acceleration.x = 0;
    Firework.acceleration.y = -0.1;
    Firework.acceleration.z = 0;

    Fireworks.push(Firework);
};


