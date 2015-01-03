var THREE = require('three');
var d3 = require('d3');

module.exports = function(center, zoom){

    //todo switch between projections [globe - map]

	zoom = zoom || 20;

	//create d3 projection
	var projection = d3.geo.mercator()
			.scale(Math.pow(2,zoom))
			.center(center);

	this.translate = function(lat, lon){
		return projection([lat, lon]);
	};

	this.translate3D = function(lat, lon){
		var coords = projection([lat, lon]);
		return new THREE.Vector2(coords[0], coords[1]);
	};

	this.reverse = function(vec3){

		//reverse through projection
		return projection.invert([vec3.x,vec3.y]);

	};

	//make public, maybe needed
	this.d3 = projection;

};
