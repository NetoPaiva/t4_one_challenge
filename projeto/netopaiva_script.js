/*  script JS Neto Paiva
		Projeto Codificar - Challenge t4 ONE/Alura jan-2023 */


/*  Funções auxiliares
		================== */

//	buscar elemento HTML pelo ID:
let buscaId = b => document.getElementById(b);

//	limpar valor do ID
let limpaArea = (a,b) => buscaId(a).value = b;

//	copiar valor do elemento HTML
let copiaMemo = m => navigator.clipboard.writeText(m.value);

//	colar texto no elemento HTML
let colaMemo = () => navigator.clipboard.readText();

//	detectar evento do usuário
let captaEvento = (x,y,z) => x.addEventListener(y,z);

//	recarregar a página:
let recarrega = x => location.reload(true);


/*	Receber seletores HTML áreas de texto e botões
		============================================== */

const textoEntrada = buscaId('entrada');
const textoSaida = buscaId('saida');
const btnCopiar = buscaId('copiar');
const btnColar = buscaId('colar');
const btnRecarregar = buscaId('recarregar');
const btnCodificar = buscaId('codifica');
const btnDecodificar = buscaId('decodifica');


/*  Funções Codificar / Decodificar
		===============================*/

//	Codificar
let codificar = captaEvento(btnCodificar, 'click', () => {
	// variável recebe o valor da área de entrada de texto
	var doc = buscaId('entrada').value;
	// verifica se área está vazia - emite alerta
	if(doc == ''){
		alert('Ops, não há texto para codificar!');
	// realiza a função se não estiver vazia
	} else{
			doc = doc.normalize('NFD')
							 .replace(/[^a-zA-Z\s]/g, "")
							 .toLowerCase();
	// só nesta ordem codifica e decodifica corretamente
	// código alterado de "ai" para "ati" para evitar erro ao decodificar
			doc = doc.replace(/e/g, 'enter')
							 .replace(/i/g, 'imes')
							 .replace(/a/g, 'ati')
							 .replace(/o/g, 'ober')
							 .replace(/u/g, 'ufat');
	// insere texto codificado da área de saída
			buscaId('saida').value = doc;
	// ação de ocultar a tela1 e mostrar a tela2
			buscaId('tela1').style.display = 'none';
			buscaId('tela2').style.display = 'block';
	// ação para limpar a área de entrada de texto
			limpaArea('entrada', '');
		}
});

// Decodificar
captaEvento(btnDecodificar, 'click', () => {
	var doc = buscaId('entrada').value;
	if(doc == ''){
		alert('Ops, não há texto para decodificar!');
	} else{
			doc = doc.replace(/enter/g, 'e')
							 .replace(/imes/g, 'i')
							 .replace(/ati/g, 'a')
							 .replace(/ober/g, 'o')
							 .replace(/ufat/g, 'u');
			buscaId('saida').value = doc;
			buscaId('tela1').style.display = 'none';
			buscaId('tela2').style.display = 'block';
			limpaArea('entrada', '');
		}
});


/*	Funções copiar / colar / recarregar
		=================================== */

// Copiar
captaEvento(btnCopiar, 'click', () => {
	copiaMemo(textoSaida);
	limpaArea('saida', '');
});

// Colar
captaEvento(btnColar, 'click', async () => {
	const colar = await colaMemo();
	textoEntrada.value = colar;
	buscaId('tela2').style.display = 'none';
	buscaId('tela1').style.display = 'block';
});

// Recarregar a página
captaEvento(btnRecarregar, 'click', recarrega);


//---  .fim :)
