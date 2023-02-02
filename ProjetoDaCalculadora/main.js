function addUser(){
    var nome1 = document.getElementById("inputNome1").value;
    var nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game_page.html";   
}
function carregar(){
    var nome1 = localStorage.getItem("player1");
    var nome2 = localStorage.getItem("player2");
    document.getElementById("legendaNome1").innerHTML = nome1;
    document.getElementById("legendaNome2").innerHTML = nome2;
}
function send(){
n1 = document.getElementById("numero1"). value;
n2 = document.getElementById("numero2"). value;
respostaCerta = parseInt(n1) * parseInt(n2);
questao = "<h4>" + n1 + " X "+ n2 + "</h4>";

caixa =   '<h3>answer:</h3><input id="resposta"></input>'
botao = '<button onclick="checar()" id="verificar">Verificar</button> '
linha = questao + caixa + botao;
document.getElementById("output").innerHTML = linha;
document.getElementById("numero1"). value = "";
document.getElementById("numero2"). value = "";


}
 var jogadorPergunta = "player1";
 var jogadorResposta = "player2";
 var pontos1 = 0;
 var pontos2 = 0;
 var respostaCerta = 24;
function checar(){
        var resposta = document.getElementById("resposta").value;
        
    
        if(resposta == respostaCerta){
            if(jogadorResposta === 'player1'){
                pontos1 +=1;
                document.getElementById("pontos1").innerHTML = pontos1;
            }else{
             pontos2 +=1;
             document.getElementById("pontos2").innerHTML = pontos2;   
            }
        }
        if(jogadorPergunta =='player1'){
           jogadorPergunta = 'player2';
        }else{
            jogadorPergunta = 'player1';
        }
        if(jogadorResposta =='player1'){
            jogadorResposta = 'player2';
        }else{
            jogadorResposta = 'player1';
        }
    
        document.getElementById("jogadorPergunta").innerHTML = localStorage.getItem(jogadorPergunta);
        document.getElementById("jogadorResposta").innerHTML = localStorage.getItem(jogadorResposta);
    
        
        var input = ' <input id="resposta"> ';
        var botao = ' <button onclick="checar()" id="verificar">Verificar</button>';
        var campoPergunta = input + botao;
        document.getElementById("output").innerHTML = campoPergunta;
    }
