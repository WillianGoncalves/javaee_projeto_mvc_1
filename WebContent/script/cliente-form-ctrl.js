( function( app ) {
	'use strict';

	/**
	 * Controladora de Formulário de Clientes
	 */
	function ControladoraFormCliente( servicoClientes, servicoCidades, $, toastr ) {

		var mostrarErro = function mostrarErro( jqXhr ) {
			toastr.error( jqXhr.responseJSON.join( ", ") );
		};

		var mostrarSucesso = function mostrarSucesso( data ) {
			toastr.success( data.join( ", " ) );
		};

		var registrarCliqueBotoes = function registrarCliqueBotoes() {
		};

		var idSelecionado = function idSelecionado() {
			return parseInt( $( '#clientes tbody .cor-linha :first' ).html() );
		};

		var listarCidades = function listarcidades(data) {
			console.log("listando cidades");
			var html = '';

			for ( var i in data) {
				var cidade = data[i];

				html += "<option value=" + cidade.id + ">" + cidade.nome + "</option>";
			}

			$('#cidade').html(html);
		};

		this.configurar = function configurar() {
			registrarCliqueBotoes();

			var promessa = servicoCidades.cidades();
			promessa.done(listarCidades);
			promessa.fail(mostrarErro);
		};
	}

	app.ControladoraFormCliente = ControladoraFormCliente;

} )( app );
