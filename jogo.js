function primeiraFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Yone treinava com seu Kenshiro Sensei na vila Yoshinogari, quando recebe a visita inesperada de seu irmão Kentaro, muito nervoso, com a notícia de que sua família acabara de ser sequestrada. Ao saber do ocorrido, ele se junta a Kenshiro na saga para salvar a sua família. Pra onde ele vai?';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Buscar pistas em sua casa, onde aconteceu o sequestro';
    btn2.textContent= 'Ele já tem um suspeito! Apressado e irritado, vai direto confrontá-lo';
    btn1.onclick = segundaFase();
    btn2.onclick = perderFase1();
  }
  
function tchau() {
    var texto= document.querySelector ('#texto'); 
    texto.textContent= 'Obrigada pela visita. Se mudar de ideia, é só atualizar o site.';
}

function perderFase1() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Yone acusou a pessoa errada e acabou perdendo tempo na busca pela sua família, ele deveria ter pensado melhor e ir procurar pistas em sua casa!';
    var btn1= document.querySelector('#btn1');
    //var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Corre pra casa!';
    //btn2.textContent= '';
    btn1.onclick = segundaFase();
    //btn2.onclick = perder();
    }

function segundaFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Depois de uma varredura pela residência, eles acham um bilhete e descobrem que seu ex-parceiro de dojo, Shaka, está por trás do sequestro. O bilhete diz que Yone deve ir até o Templo Amaterasu, localizado na floresta Kunenan, às 17h.';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Chama a galera, e vai pro templo!';
    btn2.textContent= 'Yone é inconsequente e, como ainda são 14h, resolve ir atrás do Shaka na casa dele';
    btn1.onclick = terceiraFase();
    btn2.onclick = perderFase2();
}

function perderFase2() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Mas é claro que o Shaka não é bobo de ficar em casa né!';
    var btn1= document.querySelector('#btn1');
    //var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Se organiza logo pra ir atrás dele no templo!';
    //btn2.textContent= '';
    btn1.onclick = terceiraFase();
    //btn2.onclick = perder()
    }

function terceiraFase() {                           
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Durante o trajeto, Yone e seu mestre, se deparam com uma bifurcação';
    var btn1= document.querySelector('#btn1');  //FASE DA ARMADILHA
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Eles vão pela esquerda';
    btn2.textContent= 'Eles vão pela direita';
    btn1.onclick = perderFase3();
    btn2.onclick = quartaFase();
}

function perderFase3() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Você errou o caminho! Volte, e tente novamente.';
    var btn1= document.querySelector('#btn1');
    //var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Voltar';
    //btn2.textContent= '';
    btn1.onclick = terceiraFase();
    //btn2.onclick = perder()
    }

function gameOver() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Agora não teve jeito, fim do jogo.';
    var btn1= document.querySelector('#btn1');
    //var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Jogar novamente';
    //btn2.textContent= '';
    btn1.onclick = primeiraFase();
    //btn2.onclick = perder()
    }

function quartaFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Eles conseguem chegar ao templo, e Yone lutou equlibradamente com Shaka, até que o mesmo jogou uma bomba de fumaça e desapareceu com toda a sua família através de um portal que se fechou logo em seguida. Ainda bem que Kenshiro também sabia fazer o mesmo feitiço!';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Partiu portal do tempo!';
    btn2.textContent= 'Eu não, tô com medo!';
    btn1.onclick = quintaFase();
    btn2.onclick = gameOver();
}

function quintaFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Ao passar pelo portal, o Samurai e seu mestre desembarcam numa viela no bairro da Liberdade, em São Paulo, onde estava acontecendo uma festa conhecida como Festa das Flores. Saindo da viela, o samurai consegue avistar Shaka.';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Yone corre igual a um doido atrás de Shaka';
    btn2.textContent= 'Tem tanta gente andando na rua por causa da festa, que Yone perde o Shaka de vista';
    btn1.onclick = sextaFase();
    btn2.onclick = gameOver();
}

function sextaFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Ele vê Shaka entrando em um templo com duas estátuas de dragão na entrada. Porém, ao se aproximar, Shaka faz mais um feitiço e dá vida as estátuas, que se transformam em dois dragãozões cospidores de flores.';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Vamo pra luta!';
    btn2.textContent= 'Cruz, tô fora';
    btn1.onclick = setimaFase();
    btn2.onclick = gameOver();
}

function setimaFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Yone enfrenta os dragões e vence. Ele entra no templo e encontra Shaka, e também sua família amarrada. Yone vai pra cima de Shaka e eles começam a batalhar.';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Deu ruim pro Shaka';
    btn2.textContent= 'Deu ruim pro Yone';
    btn1.onclick = oitavaFase();
    btn2.onclick = gameOver();
}

function oitavaFase() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'O samurai vence, liberta sua família, volta para sua vila natal e é honrado com elevação de grau no seu dojo. Virando assim, um herói Samurai.';
    var btn1= document.querySelector('#btn1');
    var btn2= document.querySelector('#btn2');
    btn1.textContent= 'Jogar novamente';
    btn2.textContent= 'Já deu por hoje';
    btn1.onclick = primeiraFase();
    btn2.onclick = valeu();
}

function valeu() {
    var texto= document.querySelector ('#texto');
    texto.textContent = 'Muito obrigada por ter gastado seu tempo aqui! (:';
}
