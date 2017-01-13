MYAPP.createNS("MYAPP.Quaternion");

MYAPP.Quaternion = function(w,x,y,z) {
    //var a = ( w / 360 ) * Math.PI * 2;   
    //this.w = Math.cos(a / 2); 
    //this.x = x * Math.sin( a / 2);
    //this.y = y * Math.sin( a / 2);
    //this.z = z * Math.sin( a / 2);
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
};

MYAPP.Quaternion.prototype = {
    constructor: MYAPP.Quaternion,
    invert:function() {
        var q = new MYAPP.Quaternion();
        q.w = this.w;
        q.x = -this.x;
        q.y = -this.y;
        q.z = -this.z;
        return q;
    },
    round:function() {
        // this.w = (this.w < 0.0000000000001 && this.w > -0.0000000000001 ? 0 : this.w);
        // this.x = (this.x < 0.0000000000001 && this.x > -0.0000000000001 ? 0 : this.x);
        // this.y = (this.y < 0.0000000000001 && this.y > -0.0000000000001 ? 0 : this.y);
        // this.z = (this.z < 0.0000000000001 && this.z > -0.0000000000001 ? 0 : this.z);

        return this;
    },
    multiplyVector3: function ( vec ) {
        
        var tmp = new MYAPP.Vector3(0,0,0);

        var x = vec.x , y = vec.y , z = vec.z,
           qx = this.x, qy = this.y, qz = this.z, qw = this.w;
           
        // calculate quat * vec:
        var ix =  qw * x + qy * z - qz * y,
            iy =  qw * y + qz * x - qx * z,
            iz =  qw * z + qx * y - qy * x,
            iw = -qx * x - qy * y - qz * z;
        // calculate result * inverse quat:
        tmp.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        tmp.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        tmp.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

        return tmp;
    },  
    multiply: function (a,b) {

        var xx = a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y;
        var yy = a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x;
        var zz = a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w; 
        var ww = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
        
        this.x = xx;
        this.y = yy;
        this.z = zz;
        this.w = ww;


        //return new MYAPP.Quaternion( ww, xx, yy, zz );
        
        // var xx = a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y;
        // var yy = a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x;
        // var zz = a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w;
        // var ww = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;

        // (v1, s1)(v2, s2) = (s1v2 + s2v1 + v1 x v2, s1s2 - v1 . v2)

        // var v1 = new MYAPP.Vector3(a.x,a.y,a.z);
        // var v2 = new MYAPP.Vector3(b.x,b.y,b.z);
        // var s1 = a.w;
        // var s2 = b.w;

        // var tmpXYZ = v1.scaleVec(s2).addVec(v2.scaleVec(s1));
        // tmpXYZ.addVec(v1.vectorProduct(v2));

        // var tmpW = s1*s2 - v1.scalarProduct(v2);

        // this.x = tmpXYZ.x;
        // this.y = tmpXYZ.y;
        // this.z = tmpXYZ.z;
        // this.w = tmpW;

    },
    conjugate: function() {

        var ww = this.w; 
        var xx = -this.x; 
        var yy = -this.y; 
        var zz = -this.z; 

        return new MYAPP.Quaternion( ww, xx, yy, zz );
    },
    normalize: function() {
        var ww = 0; var xx = 0; var yy = 0; var zz = 0;
        var len = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );
        if ( len === 0 ) {
          ww = 0;
          xx = 0;
          yy = 0;
          zz = 0;
        } 
        else {
          len = 1 / len;
          ww = this.w * len;
          xx = this.x * len;
          yy = this.y * len;
          zz = this.z * len;
        }
        return new MYAPP.Quaternion( ww, xx, yy, zz );
    },
    length: function() {
        return Math.sqrt(this.w*this.w + this.x*this.w + this.y*this.y + this.z*this.z);
    },
    lengthSquared: function() {
        return (this.w*this.w + this.x*this.x + this.y*this.y + this.z*this.z);  
    },
    negate: function() {
        var ww = -this.w; 
        var xx = -this.x; 
        var yy = -this.y; 
        var zz = -this.z; 

        return new MYAPP.Quaternion( ww, xx, yy, zz );
    },
    add: function(q) {
        var ww = this.w + q.w; 
        var xx = this.x + q.x;  
        var yy = this.y + q.y;  
        var zz = this.z + q.z;  

        return new MYAPP.Quaternion( ww, xx, yy, zz );
    },
    subtract: function(q) {
        var ww = this.w - q.w; 
        var xx = this.x - q.x;  
        var yy = this.y - q.y;  
        var zz = this.z - q.z;  

        return new MYAPP.Quaternion( ww, xx, yy, zz );  
    },
    scale: function(f) {
        var ww = this.w * f; 
        var xx = this.x * f; 
        var yy = this.y * f; 
        var zz = this.z * f; 
        return new MYAPP.Quaternion( ww, xx, yy, zz );
    },
    isEqual: function(q) {
        if (this.w == q.w &&
            this.x == q.x &&
            this.y == q.y &&
            this.z == q.w )
            return true;
        else return false;
    },
    inverse: function() {
        var tmp = this.conjugate();
        var qInverse = tmp.scale(this.lengthSquared());
        

        return qInverse;
    },
    quatToAngle: function() {
        return 2.0 * Math.acos(this.w)
    },
    quatToAxis: function() {
        var s2 = 1.0 - this.w * this.w;

        if (s2 <= 0.0)
            return MYAPP.Vector3(0,0,1);

        var invs2 = 1.0 / Math.sqrt(s2);

        return new MYAPP.Vector3(this.x * invs2, this.y * invs2,
            this.z * invs2);

    },
    quatFromAxisAngle: function ( ax, ay, az, angle) {
        
        var vec =  new MYAPP.Vector3(ax,ay,az);
        vec.normalize();
        var s = Math.sin( ( angle * Math.PI / 180 ) * 0.5 );
        if (s == 0) s = 1;
        vec.scaleVec(s);
        
        //debugger;
        var w;
        if (angle != 0){
            w = Math.cos( ( angle * Math.PI / 180 ) * 0.5 );
        } else {
            w = 0;
        }
    
        this.w = w; 
        this.x = vec.x; 
        this.y = vec.y; 
        this.z = vec.z;   
    },
    pitch: function (q) {
        return Math.atan2(
            2.0 * q.y * q.z + q.w * q.x,
                q.w * q.w - q.x * q.x  - q.y * q.y + q.z * q.z);
    },
    yaw: function (q) {
        return Math.atan2(
            2.0 * q.x * q.y + q.z * q.w, 
                q.x * q.x + q.w * q.w  - q.y * q.y - q.z * q.z);
    },
    roll: function (q) {
        return Math.asin(
            2.0 * ( q.x * q.z - q.w * q.y ));
    },
    quatToEulerAngles: function(q) {
        return new MYAPP.Vector3(pitch(q), yaw(q), roll(q))
    },
    quatToMatrix4: function() {
        
        var a = this.normalize();
        var mat = new MYAPP.Matrix4();

        var xx = a.x * a.x; var yy = a.y * a.y; var zz = a.z * a.z;
        var xy = a.x * a.y; var xz = a.x * a.z; var yz = a.y * a.z;
        var wx = a.w * a.x; var wy = a.w * a.y; var wz = a.w * a.z;
    
        mat[0 * 4 + 0] = 1 - 2 * (yy + zz);
        mat[0 * 4 + 1] = 2 * (xy + wz);
        mat[0 * 4 + 2] = 2 * (xz - wy);
        //mat[0 * 4 + 3] = ;

        mat[1 * 4 + 0] = 2 * (xy - wz);
        mat[1 * 4 + 1] = 1 - 2 * (xx + zz);
        mat[1 * 4 + 2] = 2 * (yz +wx);
        //mat[1 * 4 + 3] = ;

        mat[2 * 4 + 0] = 2 * (xz + wy);
        mat[2 * 4 + 1] = 2 * (yz - wx);
        mat[2 * 4 + 2] = 1 - 2 * (xx + yy);
        //mat[2 * 4 + 3] = ;

        //mat[3 * 4 + 0] = ;
        //mat[3 * 4 + 1] = ;
        //mat[3 * 4 + 2] = ;
        //mat[3 * 4 + 3] = ;

        return mat;

    },
    slerp: function(q) {

    }

};