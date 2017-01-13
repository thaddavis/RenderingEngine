MYAPP.createNS("MYAPP.Camera");

MYAPP.Camera = function(pos, look, up) {
   this.xAxis = new MYAPP.Vector3(1,0,0);
   this.yAxis = new MYAPP.Vector3(0,1,0); 
   this.zAxis = new MYAPP.Vector3(0,0,1);	
   this.pos = pos;
   this.look = look;
   this.up = up;
   this.forward = new MYAPP.Vector3(0,0,0);
   this.LookAtPoint = new MYAPP.Vector3(0,0,0);
   this.orientation = new MYAPP.Quaternion(1,0,0,0);
   this.camera_scale = 0.0125;
   
   this.camera_pitch = 0;
   this.prev_pitch_dir = 0;
   
   this.camera_yaw = 0;
   this.prev_yaw_dir = 0;
   
   this.camera_roll = 0;
   this.prev_roll_dir = 0;
   
   this.max_pitch_rate = 5;
   this.max_yaw_rate = 5;
   this.max_roll_rate = 5;
   this.camera_rotate = false;
   this.camera_translate = false;
   this.camera_position_delta = new MYAPP.Vector3(0,0,0);
   this.camera_direction = new MYAPP.Vector3(0,0,0);
   this.mouse_position = new MYAPP.Vector3(0,0,0);
   this.MouseSensitivity = 0.002;
};

MYAPP.Camera.prototype = {
    constructor: MYAPP.Camera,
    move: function(direction, amount) {
    	this.pos = this.pos.addVec(direction.scaleVec(amount));
    },
    getLeft:function() {
    	var left = this.up.vectorProduct(this.forward);
    	return left.normalize();
    },
    getRight:function() {
    	var right = this.forward.vectorProduct(this.up);
    	return right.normalize();
    },
    rotateX:function(angle) {
    	var Haxis = this.yAxis.vectorProduct(this.forward);
    	Haxis.normalize();
    	this.forward.rotate(angle, Haxis);
    	this.forward.normalize();
    	this.up = this.forward.vectorProduct(Haxis);
    	this.up.normalize();
    },
    rotateY:function(angle) {
    	var Haxis = this.yAxis.vectorProduct(this.forward);
    	Haxis.normalize();
    	this.forward.rotate(angle, this.yAxis);
    	this.forward.normalize();
    	this.up = this.forward.vectorProduct(Haxis);
    	this.up.normalize();
    },
    reset:function() {
        //debugger;
        //console.log("reset not correctly implemented");

        this.up = new MYAPP.Vector3(0,0,1);
    }
}