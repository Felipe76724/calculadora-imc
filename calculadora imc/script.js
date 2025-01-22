function calcular() {
    var res = document.getElementById('formulario')
    var nome = document.getElementById('nome').value;
    var alt = document.getElementById('altura').value;
    var x = Number(alt);
    var peso = document.getElementById('peso').value ;
    var y = Number(peso);
    var xCM = x/100

    var resultado = y/(xCM*xCM) //fazendo o calculo
    var resultadoFormatado = resultado.toFixed(2)

    if(xCM % 1 !== 0){
      alert('Por favor coloque as medidas em Centímetros')
         return;
    }

    if(resultado < 18.5){       //definindo as condiçoes
        res.textContent = nome + ', o resultado do seu imc indica que você está abaixo do peso: ' + resultadoFormatado

    }

    else if(resultadoFormatado >= 18.5 && resultadoFormatado <25){
        res.textContent = nome + ', o resultado do seu imc indica que você está saúdavel: ' + resultadoFormatado
    }
    else if(resultadoFormatado > 25 && resultadoFormatado < 30){
        res.textContent = nome + ', o resultado do seu imc indica que você está sobrepeso: ' + resultadoFormatado
    }
    else if(resultadoFormatado > 30){
        res.textContent = nome + ', o resultado do seu imc indica que você está obeso: ' + resultadoFormatado
    }

    else{
        alert("Por favor inserir os dados requisitados.")
        return;
        
    }
    
    var botao_voltar = document.createElement("button") //criando um botao 
  
    botao_voltar.innerHTML = "Voltar"
    botao_voltar.style.marginTop = "20px";
    botao_voltar.style.padding = "10px 20px";
    botao_voltar.style.fontSize = "16px";
    botao_voltar.style.fontFamily = "Montserrat, serif;"
    botao_voltar.style.cursor = "pointer" 
    botao_voltar.style.backgroundColor = "#4CAF50"
    botao_voltar.style.borderRadius = "5px"
    botao_voltar.style.border = "none"
    botao_voltar.style.transitions = "transform 0.3s ease-in-out;"
    
    
    botao_voltar.addEventListener("click", function(){ //função para voltar e calcular dnv
        location.reload();
    });

    res.appendChild(botao_voltar);

    res.style.display = "flex"; 
    res.style.justifyContent = "center"; 
    res.style.alignItems = "center"; 
    res.style.textAlign = "center"; 
    res.style.fontFamily = "Montserrat, serif;"


    
}