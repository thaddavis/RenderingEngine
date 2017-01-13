MYAPP.createNS("MYAPP.Particle");

MYAPP.Particle = function() {
    this.position = new MYAPP.Vector3(0,0,0);
    this.velocity = new MYAPP.Vector3(0,0,0);
    this.acceleration = new MYAPP.Vector3(0,0,0);
    this.startTime = Date.now();
    this.damping = 0.99;
    this.inverseMass = 1.0;
};

MYAPP.Particle.prototype = {
    constructor: MYAPP.Particle,
    integrate:function (duration) {
        if (this.inverseMass <= 0.0) return;

        this.position.addScaledVec(this.velocity);

        var resultingAcc = this.acceleration;

        this.velocity.addScaledVec(resultingAcc);

        this.velocity.scaleVec(Math.pow(this.damping, duration));        
    }
};
    