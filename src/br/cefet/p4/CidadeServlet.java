package br.cefet.p4;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.cefet.p4.collection.ColecaoCidade;
import br.cefet.p4.collection.bdr.ColecaoCidadeEmBDR;
import br.cefet.p4.collection.bdr.FabricaConexao;

/**
 * Servlet implementation class CidadeServlet
 */
@WebServlet("/api/cidades")
public class CidadeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	ColecaoCidade colecaoCidade;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CidadeServlet() {
        super();
        FabricaConexao fabrica = new FabricaConexao();
        Connection conexao;
		try {
			conexao = fabrica.criar();
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
		colecaoCidade = new ColecaoCidadeEmBDR( conexao );
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String conteudo;
		try {
			conteudo = ( new Gson() ).toJson( colecaoCidade.todos()  );			
		} catch ( Exception e ) {
			response.setStatus( 400 );
			conteudo = "[ \"Erro ao carregar as cidades.\"  ]";			
		}
		sendJson( response, conteudo );
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	private void sendJson(HttpServletResponse response, String json) throws IOException {
		response.setContentType( "application/json" );
		response.getWriter().write( json );
	}

}
