var voz = '';
     
function ouvir(){
    //pega o texto
    var mensagem = document.getElementById('texto').value;

    //pega se vc quer voz mascolina ou feminina
    var radios = document.getElementsByName('vozes');
    for(i=0; i < radios.length; i++){
        if(radios[i].checked){
            voz = radios[i].value;
        } 
    }
    console.log(voz);
    responsiveVoice.speak(mensagem, `Brazilian Portuguese ${voz}` , {rate:1, volume: 1, pitch:0.9});
    
}     



//esse é o modelo para usar em sua API, 
// responsiveVoice.speak("inserir o que vc quer falar aqui", "Brazilian Portuguese Male" , {rate:1, volume: 1, pitch:0.9});

//a api utiliza jQuery