/*
 * script JS Neto Paiva
 * Projeto Codificar - Challenge t4 ONE/Alura jan-2023
 */


/*  Funções auxiliares */

  let buscaId = b => document.getElementById(b);
  let limpaArea = (a,b) => buscaId(a).value = b;
  let copiaMemo = m => navigator.clipboard.writeText(m.value);
  let colaMemo = () => navigator.clipboard.readText();
  let captaEvento = (x,y,z) => x.addEventListener(y,z);
  let recarrega = () => location.reload(true);
  let mudaDisplay = (x,y) => x.style.display = y;


/* Receber seletores HTML - áreas de texto e botões */

  const textoEntrada = buscaId('entrada');
  const textoSaida = buscaId('saida');
  const btnCopiar = buscaId('copiar');
  const btnColar = buscaId('colar');
  const btnRecarregar = buscaId('recarregar');
  const btnCodificar = buscaId('codifica');
  const btnDecodificar = buscaId('decodifica');
  const idTela1 = buscaId('tela1');
  const idTela2 = buscaId('tela2');


/* Função Codificar / Decodificar
 *
 * variável recebe o valor da área de entrada de texto
 * verifica se área está vazia - emite alerta
 * realiza a função se não estiver vazia
 * só nesta ordem transforma vogais corretamente
 * código alterado de "ai" para "ati" para evitar erro ao decodificar
 * insere na área de saída o texto transformado
 * ação de ocultar a tela1 e mostrar a tela2
 * ação para limpar a área de entrada de texto
 */

  captaEvento(btnCodificar, 'click', () => {
    var doc = textoEntrada.value;
    if(doc == ''){
      alert('Ops, não há texto para codificar!');
    }
    else{
      doc = doc.normalize('NFD')
               .replace(/[^a-zA-Z\s]/g, "")
               .toLowerCase()
               .replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ati')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
      textoSaida.value = doc;
      mudaDisplay(idTela1, 'none');
      mudaDisplay(idTela2, 'block');
      limpaArea('entrada', '');
    }
  });

  captaEvento(btnDecodificar, 'click', () => {
    var doc = textoEntrada.value;
    if(doc == ''){
      alert('Ops, não há texto para decodificar!');
    }
    else{
      doc = doc.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ati/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
      textoSaida.value = doc;
      mudaDisplay(idTela1, 'none');
      mudaDisplay(idTela2, 'block');
      limpaArea('entrada', '');
    }
  });


/*  Funções copiar / colar / recarregar */

  captaEvento(btnCopiar, 'click', () => {
    copiaMemo(textoSaida);
    limpaArea('saida', '');
  });

  captaEvento(btnColar, 'click', async () => {
    const colar = await colaMemo();
    textoEntrada.value = colar;
    mudaDisplay(idTela2, 'none');
    mudaDisplay(idTela1, 'block');
  });

  captaEvento(btnRecarregar, 'click', recarrega);


//---  .fim :)