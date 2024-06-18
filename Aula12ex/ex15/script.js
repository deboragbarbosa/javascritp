function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.ariaValueMax.length == 0 || Number(fano.value)> ano) {window.alert('[ERRO] Verifique os dados e tente novamnete!')}
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document. createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
            } else if (idade <21){
                //jovem 
            } else if (idade < 50){
                //Adulto
            } else {
                //Idoso
            }

        }
    }
    
}