MYAPP.createNS("MYAPP.Transform");

MYAPP.Transform = function() {
	this.position = new MYAPP.Vector3(0,0,0);
    this.orientation = new MYAPP.Quaternion(1,0,0,0);
    this.scale = new MYAPP.Vector3(0,0,0);
   
};

MYAPP.Transform.prototype = {
    constructor: MYAPP.Transform,
    multiply:function(ps, ls) {
    	var ws; // itself a transform type

    	ws.position = ps.position + ps.orientation * (ps.scale * ls.position);
    	ws.orientation = ps.orientation * ls.orientation;
    	ws.scale = ps.scale * (ps.orientation * ls.scale);

    	return ws;
    },
    divide: function(ps, ws) {
    	var ls;

    	var psConjugate = conjugate(ps.orientation);

    	ls.position = (psConjugate * (ws.position - ps.position)) / ps.scale;
    	ls.orientation = psConjugate * ws.orientation;
    	ls.scale = psConjugate * (ws.scale / ps.scale);

    	return ls;
    },
    inverse: function() {
    	var i = new MYAPP.Transform();
    	return i / t ;
    }
}