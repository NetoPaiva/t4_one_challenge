//	Versão função compacta - boa opção

	function criarTexto(z,x,y){
		a = document.createElement(x);
		b = document.createTextNode(y);
		c = a.appendChild(b);
		d = document.querySelector(z);
		d.appendChild(a,b);
	}

	criarTexto('body', 'h1', 'Título da página');
	criarTexto('body', 'h2', 'Texto do subtítulo.');
	criarTexto('body', 'p', 'Texto do parágrafo 1.');
	criarTexto('body', 'p', '._fim_ ; )');


//	._fim_ ; )