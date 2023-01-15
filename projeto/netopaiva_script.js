//  script JS Neto Paiva - Projeto Codificar - Challenge t4 ONE/Alura jan-2023


//  Funções auxiliares
//  ==================

//	- buscar elemento HTML pelo ID:
		let buscaId = b => document.getElementById(b);

//	- limpar valor do ID
		let limpaArea = (a,b) => buscaId(a).value = b;

//	- copiar valor do elemento HTML
		let copiaMemo = m => navigator.clipboard.writeText(m.value);

//	- colar texto no elemento HTML
		let colaMemo = () => navigator.clipboard.readText();

//	- detectar evento do usuário
		let captaEvento = (x,y,z) => x.addEventListener(y,z);

//	- recarregar a página:
		let recarrega = x => location.reload(true);


//	- Receber seletores HTML áreas de texto e botões
//  ================================================

		const textoEntrada = buscaId('entrada');
		const textoSaida = buscaId('saida');
		const btnCopiar = buscaId('copiar');
		const btnColar = buscaId('colar');
		const btnRecarregar = buscaId('recarregar');
		const btnCodificar = buscaId('codifica');
		const btnDecodificar = buscaId('decodifica');


//  Funções dos botões
//  ==================

//- ainda falta programar ocultar e mostrar textarea/imagem e botões

//	Codificar
		let codificar = captaEvento(btnCodificar, 'click', () => {
			var doc = buscaId('entrada').value;

			doc = doc
				.normalize('NFD')
				.replace(/[^a-zA-Z\s]/g, "")
				.toLowerCase();

	//		só nesta ordem codifica e decodifica corretamente
			doc = doc.replace(/e/g, 'enter')
							  .replace(/i/g, 'imes')
			          .replace(/a/g, 'ai')
			          .replace(/o/g, 'ober')
			          .replace(/u/g, 'ufat');

			buscaId('saida').value = doc;
			limpaArea('entrada', '');
		});

		function copiar(){
			var textoCop = document.getElementById('entrada');
			textoCop.select();
			document.execCommand('copy');
			alert ('Texto Copiado');
		}

//	Decodificar
		captaEvento(btnDecodificar, 'click', () => {
			var doc = buscaId('entrada').value;

	//		só nesta ordem codifica e decodifica corretamente
			doc = doc.replace(/enter/g, 'e');
			doc = doc.replace(/imes/g, 'i');
			doc = doc.replace(/ai/g, 'a');
			doc = doc.replace(/ober/g, 'o');
			doc = doc.replace(/ufat/g, 'u');

			buscaId('saida').value = doc;
			limpaArea('entrada', '');
		});

//  Copiar
		captaEvento(btnCopiar, 'click', () => {
			copiaMemo(textoSaida);
			limpaArea('saida', '');
		});

//  Colar
		captaEvento(btnColar, 'click', async () => {
			const colar = await colaMemo();
			textoEntrada.value = colar;
		});

//  Recarregar a página
		captaEvento(btnRecarregar, 'click', recarrega);


//---  .fim :)