let previsao1, previsao2;
let camera;
let img;
let classificar;

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    jpeg_quality: 90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function tirarFoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("fotoTirada").innerHTML = '<img id="imagemcapturada" src"'+data_uri+'"/>';
    });
}

console.log("ml5 versão", ml5.version);

classificar = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kL3bfwG8M/model.json', modelLoaded);

function modelLoaded() {
    console.log("Modelo carregado!");
}

function verificarFoto(){
    img = document.getElementById("imagemcapturada");
    classificar.classify(img, gotResults);
}

function gotResults(error, results){
    if (error) {
         console.error(error);
    } else{
        console.log(results);
        document.getElementById("resultadoEmoji").innerHTML = results[0].label;
        document.getElementById("resultadoEmoji").innerHTML = results[1].label;
        previsao1 = results[0].label;
        previsao2 = results[1].label;
        falar();
        if(previsao1 == "Gesto 1 - Joinha"){
        document.getElementById('mostrarEmoji1').innerHTML = "&#128077;";
        document.getElementById('mostrarEmoji1');
        }
        if(previsao1 == "Gesto 2 - Paz e"){
        document.getElementById('mostrarEmoji1').innerHTML = "&#9996;";
        document.getElementById('mostrarEmoji1');
        }
        if(previsao1 == "Gesto 3 - "){
        document.getElementById('mostrarEmoji1').innerHTML = "&#129305;";
        document.getElementById('mostrarEmoji1');
        }
    }
}