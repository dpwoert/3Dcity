Package.describe({
	summary: "cityIO - Rotterdam visualisation"
});

Package.on_use(function (api) {

	// use dependencies
	api.use(['cityio','cityio-loader'], "client");
	api.use(['cityio'], "server");
	api.add_files('dependencies.js', 'server');

	//add ships
	api.add_files([

		'3dmodels/ship.json'
		
	], 'client', {isAsset: true});

	// load front-end
	api.add_files('client/buildpack.js', 'client');


});