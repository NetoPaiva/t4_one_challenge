//  script Neto Paiva - Projeto codDoc - Challenge ONE/Alura jan-2023


//  Funções auxiliares
//  ==================


//  Pegar elemento HTML pelo ID  

    function getId(y){
        document.getElementById(y);
    }


//  API e interface para copiar texto

    function clipBoard(){
        navigator.clipboard.writeText();
    }


//  Limpar campo texto do HTML

    function limpaCampo(x){
        getId(x).value = '';
    }



//  Funções principais
//  ==================

//  Copiar texto de elementos do HTML

    function copDoc(x){
        var copia = getId(x);
        clipBoard(copia.value);
        limpaCampo(x);
    }



//  Chamar as funções
//  =================


// função copiar texto do campo HTML "saida"

    copDoc('saida');



//  fim
