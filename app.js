//Variables
const clickEnSi = document.querySelector('#link-1');
const CerrarDiv = document.querySelector('#close-button');
const botonNo = document.querySelector('#boton__2')
const audio = document.querySelector('#audio');
const botonDeNo = document.querySelector('#boton__2');

//Eventos
clickEnSi.addEventListener('click', apacharParaAbrir);
CerrarDiv.addEventListener("click", apacharParaCerrar);
botonDeNo.addEventListener('mouseenter',encimaDeNo)


//funciones 

function encimaDeNo(e) {
    e.preventDefault();
    $("#boton__2").hover(function () {
        $("#boton__2").css("top", `${Math.random() * 400}px`);
        $("#boton__2").css("left", `${Math.random() * 400}px`);
      });
    console.log('Estoy encima')
}


function apacharParaAbrir (e) {
    e.preventDefault();
    document.querySelector("#window-notice").style.display = "flex";


    //console.log('CLICKS')
    clickEnSi.onclick = () => {
        const textoCuadro = document.querySelector('#textoCuadro');
        textoCuadro.textContent = 'TEXTO2';

        //Crear abajo un div con texto
        DivEmergente();
        
        //Soltar audio 
        sonarAudio();

    }
}

function DivEmergente() {
    const cuadroDiv = document.createElement('p')
    cuadroDiv.textContent = 'Texto1';
    cuadroDiv.classList.add('DivEmergente');
    document.querySelector('#body').insertBefore(cuadroDiv, audio);

}

function sonarAudio() {
    const audio = document.querySelector('#audio');
    if(audio) {
        audio.play();
    }
}

function apacharParaCerrar (e){
    e.preventDefault();
    document.querySelector("#window-notice").style.display = "none";
}


