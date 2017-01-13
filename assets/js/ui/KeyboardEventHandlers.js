var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  W:87,
  S:83,
  A:65,
  D:68,
  R:82,
  T: 84,
  G: 71,
  Q: 81,
  E: 69, 
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  }, 
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  },
  moveForward: function() {
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], 
      Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    forwardVec.scaleVec(deltaTime/100);    
    Camera.look.addVec(forwardVec);
    Camera.pos.addVec(forwardVec);
  },
  moveBackward: function() {
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], 
      Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    forwardVec.scaleVec(-deltaTime/100);    
    Camera.look.addVec(forwardVec);
    Camera.pos.addVec(forwardVec);
  },
  moveRight: function () {
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], 
      Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    forwardVec.scaleVec(-deltaTime/100);    

    var rightVec = (Camera.up).vectorProduct(forwardVec);

    Camera.look.addVec(rightVec);
    Camera.pos.addVec(rightVec);
  },
  moveLeft: function () {
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], 
      Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    forwardVec.scaleVec(-deltaTime/100);    

    var rightVec = (forwardVec).vectorProduct(Camera.up);

    Camera.look.addVec(rightVec);
    Camera.pos.addVec(rightVec);
  },
  moveUp: function () {
    var tmp = Camera.up.scaleVector(deltaTime/1000);

    Camera.look.addVec(tmp);
    Camera.pos.addVec(tmp);
  },
  moveDown: function () {
    var tmp = Camera.up.scaleVector(-deltaTime/1000);

    Camera.look.addVec(tmp);
    Camera.pos.addVec(tmp);
  },
  pitchUp: function() {
    if (Camera.prev_pitch_dir != 1) {
      Camera.prev_pitch_dir = 1;
      Camera.camera_pitch = 0;
    }
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    var rightVec = (forwardVec).vectorProduct(Camera.up); 
    var degrees = deltaTime/2000;
    if (degrees < -Camera.max_pitch_rate) { degrees = -Camera.max_pitch_rate; }
    else if (degrees > Camera.max_pitch_rate) { degrees = Camera.max_pitch_rate; }
    Camera.camera_pitch += degrees;
    if (Camera.camera_pitch > 360.0) { Camera.camera_pitch -= 360.0; }
    else if (Camera.camera_pitch < -360.0) { Camera.camera_pitch += 360.0; }
    Camera.orientation.quatFromAxisAngle(rightVec['x'], rightVec['y'], rightVec['z'], Camera.camera_pitch);
    var tmp = MYAPP.Vector3(0,0,0); tmp = Camera.orientation.multiplyVector3( forwardVec );
    Camera.look = Camera.pos.addVector(tmp);
    var upVec = new MYAPP.Vector3(Camera.up['x'], Camera.up['y'], Camera.up['z']);
    Camera.up = Camera.orientation.multiplyVector3( upVec );
  },
  pitchDown: function() {
    if (Camera.prev_pitch_dir != 0) {
      Camera.prev_pitch_dir = 0;
      Camera.camera_pitch = 0;
    }
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    var rightVec = (forwardVec).vectorProduct(Camera.up);
    var degrees = -deltaTime/2000;
    if (degrees < -Camera.max_pitch_rate) { degrees = -Camera.max_pitch_rate; }
    else if (degrees > Camera.max_pitch_rate) { degrees = Camera.max_pitch_rate; }
    Camera.camera_pitch += degrees;
    if (Camera.camera_pitch > 360.0) { Camera.camera_pitch -= 360.0; }
    else if (Camera.camera_pitch < -360.0) { Camera.camera_pitch += 360.0; }
    Camera.orientation.quatFromAxisAngle(rightVec['x'], rightVec['y'], rightVec['z'], Camera.camera_pitch);
    var tmp = MYAPP.Vector3(0,0,0); tmp = Camera.orientation.multiplyVector3( forwardVec );
    Camera.look = Camera.pos.addVector(tmp);
    var upVec = new MYAPP.Vector3(Camera.up['x'], Camera.up['y'], Camera.up['z']);
    Camera.up = Camera.orientation.multiplyVector3( upVec );
  },
  yawLeft: function() {
    if (Camera.prev_yaw_dir != 0) {
      Camera.prev_yaw_dir = 0;
      Camera.camera_yaw = 0;
    }
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    var upVec = new MYAPP.Vector3(Camera.up['x'], Camera.up['y'], Camera.up['z']);
    var degrees = deltaTime/2000;
    if (degrees < -Camera.max_yaw_rate) { degrees = -Camera.max_yaw_rate; }
    else if (degrees > Camera.max_yaw_rate) { degrees = Camera.max_yaw_rate; }
    Camera.camera_yaw += degrees;
    if (Camera.camera_yaw > 360.0) { Camera.camera_yaw -= 360.0; }
    else if (Camera.camera_yaw < -360.0) { Camera.camera_yaw += 360.0; }
    
    Camera.orientation.quatFromAxisAngle(upVec['x'], upVec['y'], upVec['z'], Camera.camera_yaw);
    
    var tmp = MYAPP.Vector3(0,0,0); tmp = Camera.orientation.multiplyVector3( forwardVec );
    Camera.look = Camera.pos.addVector(tmp);
  },
  yawRight: function() {
    if (Camera.prev_yaw_dir != 1) {
      Camera.prev_yaw_dir = 1;
      Camera.camera_yaw = 0;
    }
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    var upVec = new MYAPP.Vector3(Camera.up['x'], Camera.up['y'], Camera.up['z']);
    var degrees = deltaTime/2000;
    if (degrees < -Camera.max_yaw_rate) { degrees = -Camera.max_yaw_rate; }
    else if (degrees > Camera.max_yaw_rate) { degrees = Camera.max_yaw_rate; }
    Camera.camera_yaw -= degrees;
    if (Camera.camera_yaw > 360.0) { Camera.camera_yaw -= 360.0; }
    else if (Camera.camera_yaw < -360.0) { Camera.camera_yaw += 360.0; }
    Camera.orientation.quatFromAxisAngle(upVec['x'], upVec['y'], upVec['z'], Camera.camera_yaw);
    var tmp = MYAPP.Vector3(0,0,0); tmp = Camera.orientation.multiplyVector3( forwardVec );
    Camera.look = Camera.pos.addVector(tmp);
  },
  rollLeft: function() {
    if (Camera.prev_roll_dir != 0) {
      Camera.prev_roll_dir = 0;
      Camera.camera_roll = 0;
    }
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    var upVec = new MYAPP.Vector3(Camera.up['x'], Camera.up['y'], Camera.up['z']);
    var degrees = deltaTime/2000;
    
    if (degrees < -Camera.max_roll_rate) { degrees = -Camera.max_roll_rate; }
    else if (degrees > Camera.max_roll_rate) { degrees = Camera.max_roll_rate; }
    
    Camera.camera_roll -= degrees;
    
    if (Camera.camera_roll > 360.0) { Camera.camera_roll -= 360.0; }
    else if (Camera.camera_roll < -360.0) { Camera.camera_roll += 360.0; }
    
    Camera.orientation.quatFromAxisAngle(forwardVec['x'], forwardVec['y'], forwardVec['z'], Camera.camera_roll);
    
    var tmp = MYAPP.Vector3(0,0,0); tmp = Camera.orientation.multiplyVector3( upVec );
    Camera.up = tmp;    
  },
  rollRight: function() {
    if (Camera.prev_roll_dir != 1) {
      Camera.prev_roll_dir = 1;
      Camera.camera_roll = 0;
    }
    var forwardVec = new MYAPP.Vector3(Camera.look['x'] - Camera.pos['x'], Camera.look['y'] - Camera.pos['y'], 
        Camera.look['z'] - Camera.pos['z']);
    var upVec = new MYAPP.Vector3(Camera.up['x'], Camera.up['y'], Camera.up['z']);
    var degrees = deltaTime/2000;
    
    if (degrees < -Camera.max_roll_rate) { degrees = -Camera.max_roll_rate; }
    else if (degrees > Camera.max_roll_rate) { degrees = Camera.max_roll_rate; }
    
    Camera.camera_roll += degrees;
    
    if (Camera.camera_roll > 360.0) { Camera.camera_roll -= 360.0; }
    else if (Camera.camera_roll < -360.0) { Camera.camera_roll += 360.0; }
    
    Camera.orientation.quatFromAxisAngle(forwardVec['x'], forwardVec['y'], forwardVec['z'], Camera.camera_roll);
    
    var tmp = MYAPP.Vector3(0,0,0); tmp = Camera.orientation.multiplyVector3( upVec );
    Camera.up = tmp;    
  },
  reset: function() {
    Camera.reset();
  }
};

function eventHandlers() {
  if (this.Key.isDown(this.Key.UP)) { // move Forward
    this.Key.moveForward();
  }
  if (this.Key.isDown(this.Key.LEFT)) { // move Left
    this.Key.moveLeft();
  }
  if (this.Key.isDown(this.Key.DOWN)) { // move Right
    this.Key.moveBackward();
  }
  if (this.Key.isDown(this.Key.RIGHT)) { // move Backward
    this.Key.moveRight();
  }
  if (this.Key.isDown(this.Key.W)) { // pitch Up
    this.Key.pitchDown();
  }
  if (this.Key.isDown(this.Key.S)) { // pitch Down
    this.Key.pitchUp();
  }
  if (this.Key.isDown(this.Key.A)) { // yaw left
    this.Key.yawLeft(); 
  }
  if (this.Key.isDown(this.Key.D)) { // yaw right
    this.Key.yawRight();
  }
  if (this.Key.isDown(this.Key.Q)) { // roll left
    this.Key.rollLeft();
  }
  if (this.Key.isDown(this.Key.E)) { // roll right
    this.Key.rollRight(); 
  }
  if (this.Key.isDown(this.Key.T)) {
    this.Key.moveUp(); 
  }
  if (this.Key.isDown(this.Key.G)) {
    this.Key.moveDown();
  }
  if (this.Key.isDown(this.Key.R)) {
    this.Key.reset();
  }
};
