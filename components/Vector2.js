MYAPP.createNS("MYAPP.Vector2");

MYAPP.Vector2 = function(x,y) {
    this.x = x;
    this.y = y;
};

MYAPP.Vector2.prototype = {
    constructor: MYAPP.Vector2,
    invert:function () {
        this.x *= -1;
        this.y *= -1;
    },
    magnitude:function () {
        return Math.sqrt(this.x*this.x + this.y*this.y); 
    },
    squareMagnitude:function () {
        return (this.x*this.x + this.y*this.y); 
    },
    normalize:function () {
        var l = this.magnitude();
        if (l > 0) {
            this.x *= (1/l);
            this.y *= (1/l);
        }

        //return this; 
    },
    scaleVec:function (value) {
        this.x *= value;
        this.y *= value;  
    },
    addVec:function (vector) {
        this.x += vector.x;
        this.y += vector.y;        
    },
    subtractVec:function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;  
    },
    //addScaledVec:function (vector) {
    //  this.x -= vector.x;
    //   this.y -= vector.y;
    //   this.z -= vector.z;  
    //}
    //,
    componentProduct:function (vector) {
        this.x *= vector.x;
        this.y *= vector.y;
    },
    scalarProduct:function (vector) {
        return (this.x * vector.x + this.y * vector.y);
    }
};
