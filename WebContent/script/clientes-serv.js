( function( app ) {
	'use strict';

	/**
	 * Serviço de Clientes
	 */
	function ServicoClientes( $ ) {

		var urlBase = '/projeto-mvc-1/api/clientes';

		/**
		 * Retorna uma promessa da qual os clientes
		 * podem ser obtidos.
		 */
		this.clientes = function clientes() {
			return $.ajax( {
				url: urlBase,
				method: 'GET'
			} );
		};

		this.salvar = function salvar(data){
			return $.ajax( {
				url: urlBase,
				method: 'POST',
				data: data
			} );
		};

		this.remover = function remover( id ){
			return $.ajax( {
				url: urlBase + '?id=' + id,
				method: 'DELETE'
			} );
		};
	}

	app.ServicoClientes = ServicoClientes;

} )( app );
