MYAPP.createNS("MYAPP.Matrix4");

MYAPP.Matrix4 = function(opt_src) {
    var i, s, d;
    if (opt_src && typeof opt_src === 'object' && opt_src.hasOwnProperty('elements')) {
      s = opt_src.elements;
      d = new Float32Array(16);
      for (i = 0; i < 16; ++i) {
        d[i] = s[i];
      }
      this.elements = d;
    } else {
      this.elements = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
    }
};

MYAPP.Matrix4.prototype = {
    constructor: MYAPP.Matrix4,
    set:function(src) {
      var i, s, d;

      s = src.elements;
      d = this.elements;

      if (s === d) {
        return;
      }
        
      for (i = 0; i < 16; ++i) {
        d[i] = s[i];
      }

      return this;
    },
    transpose: function() {
      var e, t;

      e = this.elements;

      t = e[ 1];  e[ 1] = e[ 4];  e[ 4] = t;
      t = e[ 2];  e[ 2] = e[ 8];  e[ 8] = t;
      t = e[ 3];  e[ 3] = e[12];  e[12] = t;
      t = e[ 6];  e[ 6] = e[ 9];  e[ 9] = t;
      t = e[ 7];  e[ 7] = e[13];  e[13] = t;
      t = e[11];  e[11] = e[14];  e[14] = t;

      return this;
    }
}

