
/*Lista de musicas*/
function barra(){
    let menu = document.querySelector(".playlist");

    const linha1 = document.getElementById("line1");
    const linha2 = document.getElementById("line2");
    const linha3 = document.getElementById("line3");

    if (menu.className == "playlist"){
        menu.classList.add("active")

        /*girar o botao hamburguer*/
        linha1.classList.add("ativar")
        linha2.classList.add("ativar2")
        linha3.classList.add("ativar3")

    } else {
        menu.classList.remove("active")
        
        /*girar o botao hamburguer*/ 
        linha1.classList.remove("ativar")
        linha2.classList.remove("ativar2")
        linha3.classList.remove("ativar3")
    }
    console.log(menu.className)
    
} 

/**Audio */
let player = document.getElementById("player");
const play = document.getElementById("playMusic");

/*Duração*/
let slider = document.getElementById("duracao");
let timer;

function comecar(){
    player.setAttribute("src", " musicas/BANDA NOVO SOM - CE TEM MEU WHATSAPP LANÇAMENTO EXCLUSIVO 2021 LAMBADÃO JANEIRO_160k.mp3");
    player.load();

}
comecar();


/**Pause e play na musica */
function start(){
    
    let playLugar = play.getAttribute("src")

    if(playLugar == " imagens/play.jpg.png"){
        play.setAttribute("src", " imagens/pause.png")
        player.play();
        timer = setInterval(range_slider, 1000);
    } else {
        play.setAttribute("src", " imagens/play.jpg.png");
        player.pause();
 
    }

}

/**Reiniciar */

function reiniciar(){
   player.currentTime = 0;
   player.play();
  play.setAttribute("src", " imagens/pause.png")
}

/*Duração*/
function change_duration(){    
    slider_position = player.duration * (slider.value/100);
    player.currentTime = slider_position;
}

function range_slider(){
    let position = 0;
    let tempo = document.querySelector(".tempo")

    if(!isNaN (player.duration)){
        position = player.currentTime * (100/ player.duration);
        slider.value = position;

        if(slider.value == 100){
            play.setAttribute("src", " imagens/play.jpg.png");
        }
    }
}
/*Mudar as imagens do play*/
function mudarLista(){
    let playLugar = play.getAttribute("src")

    if(playLugar == "/imagens/play.jpg.png"){
        play.setAttribute("src", " imagens/pause.png")
    } 
} 
/*Mudar tudo*/
function mudar(){
    let playLugar = play.getAttribute("src")

    if(playLugar == " imagens/play.jpg.png"){
        play.setAttribute("src", " imagens/pause.png")
    } else {
        play.setAttribute("src", " imagens/play.jpg.png");
    }
}

/**Lista de Musicas */
let musicasLista = [
    {
      caminho: " musicas/BANDA NOVO SOM - CE TEM MEU WHATSAPP LANÇAMENTO EXCLUSIVO 2021 LAMBADÃO JANEIRO_160k.mp3"
    },
    {
       caminho: " musicas/BANDA NOVO SOM - ELE É ELE EU SOU EU LANÇAMENTO EXCLUSIVO 2021 LAMBADÃO FEVEREIRO_160k.mp3" 
    }, 
    { 
        caminho: " musicas/BANDA NOVO SOM - FACAS LANÇAMENTO EXCLUSIVO 2020 LAMBADÃO_160k.mp3"
    },
];

/**---------------------------------------------------------------- */
let a = 0;

/*Escolher musica*/
function escolher1(){
    let lista1 = document.querySelector(".lista1")
    
    a = lista1.value
 
    player.setAttribute("src", musicasLista[a].caminho);
    player.load();
    player.play();
    
    mudarLista();/*Mudar play */
}
function escolher2(){

    let lista2 = document.querySelector(".lista2")
   
    a = lista2.value

    player.setAttribute("src", musicasLista[a].caminho);
    player.load();
    player.play();

    mudarLista();
}
function escolher3(){
    let lista3 = document.querySelector(".lista3")
   
    a = lista3.value

    player.setAttribute("src", musicasLista[a].caminho);
    player.load();
    player.play();

    mudarLista();
}
/**-------------------------------------------------------- */


/*Avançar*/
function avancar(){

    mudarLista();

    if(a < musicasLista.length){
        a = a + 1
        console.log(a)
    } else  if (a == musicasLista.length) {
       a = a * 0
    }   
    player.setAttribute("src", musicasLista[a].caminho);
    player.load();
    
    player.play();
}

/*Retroceder*/ 

function retroceder(){
    if(a <= musicasLista.length && a >= 1){
        if(slider.value <= 2){
            a = a - 1
            console.log(a)
        }
    } 

    mudarLista();

    player.setAttribute("src", musicasLista[a].caminho);
    player.load();
    
    player.play();
}


