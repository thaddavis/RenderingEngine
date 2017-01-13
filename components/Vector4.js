MYAPP.createNS("MYAPP.Vector4");

MYAPP.Vector4 = function(w,x,y,z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
};

MYAPP.Vector4.prototype = {
    constructor: MYAPP.Vector4,
    invert:function () {
        this.w *= -1;
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
    },
    magnitude:function () {
        return Math.sqrt(this.w*this.w + this.x*this.x + this.y*this.y + this.z*this.z); 
    },
    squareMagnitude:function () {
        return (this.w*this.w + this.x*this.x + this.y*this.y + this.z*this.z); 
    },
    normalize:function () {
        var l = this.magnitude();
        if (l > 0) {
        	this.w *= (1/l);
            this.x *= (1/l);
            this.y *= (1/l);
            this.z *= (1/l);
        }

        //return this; 
    },
    scaleVec:function (value) {
        this.w *= value;
        this.x *= value;
        this.y *= value;
        this.z *= value;  
    },
    addVec:function (vector) {
        this.w += vector.w;
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;  
    },
    subtractVec:function (vector) {
        this.w -= vector.w;
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;  
    },
    componentProduct:function (vector) {
        this.w *= vector.w;
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
    },
    scalarProduct:function (vector) {
        return (this.w * vector.w + this.x * vector.x + this.y * vector.y + this.z * vector.z);
    },
    vectorProduct:function (vector) {
        //return new MYAPP.Vector3(this.y*vector.z-this.z*vector.y, this.z*vector.x-this.x*vector.z,this.x*vector.y-this.y*vector.x);
    }
};
