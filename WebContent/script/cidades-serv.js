(function(app){
	
	'use strict';
	
	function ServicoCidades($){
		
		var urlBase = '/projeto-mvc-1/api/cidades';
		
		this.cidades = function cidades(){
			return $.ajax({
				url: urlBase,
				method: 'GET'
			});
		};
	}
	
	app.ServicoCidades = ServicoCidades;
	
})(app);