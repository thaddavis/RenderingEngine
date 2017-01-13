MYAPP.createNS("MYAPP.Vector3");

MYAPP.Vector3 = function(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

MYAPP.Vector3.prototype = {
    constructor: MYAPP.Vector3,
    invert:function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
    },
    magnitude:function () {
        return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); 
    },
    squareMagnitude:function () {
        return (this.x*this.x + this.y*this.y + this.z*this.z); 
    },
    normalize:function () {
        var l = this.magnitude();
        if (l > 0) {
            this.x *= (1/l);
            this.y *= (1/l);
            this.z *= (1/l);
        }

        //return this; 
    },
    scaleVec:function (value) {
        this.x *= value;
        this.y *= value;
        this.z *= value;  
    },
    scaleVector:function (value) {
        return new MYAPP.Vector3( this.x * value, this.y * value, this.z * value );
    },
    addVec:function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;  
    },
    addVector:function (vector) {
        return new MYAPP.Vector3( this.x + vector['x'], this.y + vector['y'], this.z + vector['z'] );
    },
    subtractVec:function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;  
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
        this.z *= vector.z;
    },
    scalarProduct:function (vector) {
        return (this.x * vector.x + this.y * vector.y + this.z * vector.z);
    },
    vectorProduct:function (vector) {
        return new MYAPP.Vector3(this.y*vector.z-this.z*vector.y, this.z*vector.x-this.x*vector.z,this.x*vector.y-this.y*vector.x);
    },
    makeOrthonormalBasis:function (vectorA, vectorB, vectorC) {
        vectorA.normalize();
        vectorC = vectorA.vectorProduct(vectorB);
        if (vectorC.squareMagnitude() == 0.0) return;
        vectorC.normalize();
        vectorB = vectorC.vectorProduct(vectorA);
    },
    rotate:function(angle, axis) {
        
        var sinHalfAngle = Math.sin((angle/2) * Math.PI / 180);
        var cosHalfAngle = Math.cos((angle/2) * Math.PI / 180);

        var rX = axis.x * sinHalfAngle;
        var rY = axis.y * sinHalfAngle;
        var rZ = axis.z * sinHalfAngle;
        var rW = cosHalfAngle;

        var rotation = new Quaternion(rX,rY,rZ,rW);
        var thisQuaternion = new Quaternion(this.x, this.y, this.z, 1);
        var conjugate = rotation.conjugate();

        var w  = rotation.multiplySelf(thisQuaternion).multiplySelf(conjugate);

        this.x = w.x;
        this.y = w.y;
        this.z = w.z;

        return this;
    }
};
