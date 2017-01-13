function keydown(ev, gl) {
  keys[ev.keyCode] = true;
  fired = 1;

  switch (ev.keyCode) {
    case 38:
      if (ev.shiftKey == true && (keys[38] == true)) {
        LookAtY += 0.3;
        break;
      }
      if (keys[38] == true) {
        CameraY += 0.1;
        LookAtY += 0.1;
      } 
      break;
    case 40:
      if (ev.shiftKey == true && (keys[40] == true)) {
        LookAtY -= 0.03;
        break;
      }
      if (keys[40]) {
        CameraY -= 0.1;
        LookAtY -= 0.1;
      }
      break;
    case 39:
      if (ev.shiftKey == true && (keys[39] == true)) {
        LookAtX += 0.03;
        break;
      }
      if (keys[39]) {
          CameraX += 0.1;
          LookAtX += 0.1;
      }
      break;
    case 37:
      if (ev.shiftKey == true && (keys[37] == true)) {
        LookAtX -= 0.03;
        break;
      }
      if (keys[37]) {
        CameraX -= 0.1;
        LookAtX -= 0.1;   
      }
      break;
    case 65:
      if (ev.shiftKey == true && (keys[65] == true)) {
        LookAtZ += 0.03;
        break;
      }
      if (keys[65]) {
          CameraZ += 0.1;
          LookAtZ += 0.1;
      }
      break;
    case 90:
      if (ev.shiftKey == true && (keys[90] == true)) {
        LookAtZ -= 0.03;
        break;
      }
      if (keys[90]) {
          CameraZ -= 0.1;
          LookAtZ -= 0.1;    
      }
      break;    
      
    
  }
}

function keyup(ev, gl) {
  keys[ev.keyCode] = false;
  ev.shiftKey == false;

  fired = 0;
}

