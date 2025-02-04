function calcular() {
    // Definindo variáveis
    var containerArrow = document.getElementById('seta');
    var conteudoForm = document.getElementById('conteudo');
    var titulo = document.getElementById('titulo-form');
    var containerForm = document.getElementById('formulario');
    var nome = document.getElementById('nome').value.trim();
    var nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    var alt = document.getElementById('altura').value.trim();
    var peso = document.getElementById('peso').value.trim();

    //Verificando se os campos estão preenchidos
    if (!nome || !alt || !peso) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var x = Number(alt);
    var y = Number(peso);

    //Verificando se a altura e o peso são válidos
    if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
        alert("Insira valores numéricos válidos para altura e peso.");
        return;
    }

    //Verificando se a altura está em centímetros corretamente
    if (x < 100 || x > 250 || !Number.isInteger(x)) {
        alert("A altura deve ser em centímetros. Exemplo: 180");
        return;
    }

    // Convertendo altura para metros
    var xCM = x / 100;

    // Calculando o IMC
    var resultado = y / (xCM * xCM);
    var resultadoFormatado = Number(resultado.toFixed(2));

    //Atualizando estilos do formulário
    containerForm.style.background = "url('./imagens/image 3.png'),linear-gradient(rgba(250, 250, 250, 0.4), rgba(0, 0, 0, 0.6)), rgba(255, 255, 255, 0.15)";
    containerForm.style.backgroundSize = "105%, cover";
    containerForm.style.backgroundRepeat = "no-repeat";
    containerForm.style.height = "350px";
    containerForm.style.backgroundPosition = "center center";
    containerForm.style.display = "flex";
    containerForm.style.alignItems = "center";
    containerForm.style.textAlign = "center";
    containerForm.style.fontFamily = "Montserrat, serif";
    containerForm.style.margin = "10px";

    //Atualizando estilos da seta
    containerArrow.style.marginTop = "130px"
    containerArrow.animate(
        [
            { transform: "translateX(0px) rotate(45deg)" },
            { transform: "translateY(05px) rotate(45deg)" },
            { transform: "translateY(0px) rotate(45deg)" }
        ],
        {
            duration: 500, // 0,5 segundos
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

    //Exibindo o resultado do IMC
    containerArrow.style.position = "relative";
    containerArrow.style.display = "block";

    //Criando o botão para voltar e adicionando estilos
    var botao_voltar = document.createElement("button");

    botao_voltar.innerHTML = "Voltar";
    botao_voltar.style.width = "155px";
    botao_voltar.style.height = "35px";
    botao_voltar.style.fontSize = "16px";
    botao_voltar.style.fontFamily = "Montserrat, serif";
    botao_voltar.style.cursor = "pointer";
    botao_voltar.style.boxShadow = " 8px 8px 4px rgba(255, 255, 255, 0.5);";
    botao_voltar.style.backgroundColor = "#4CAF50";
    botao_voltar.style.borderRadius = "5px";
    botao_voltar.style.border = "none";
    containerForm.appendChild(botao_voltar);

    // função para o botao_voltar
    botao_voltar.addEventListener("click", function () {
        location.reload();
    });

    //condições

    if (resultadoFormatado < 18.5) {
        containerArrow.style.left = "-140px";
    } else if (resultadoFormatado < 25) {
        containerArrow.style.left = "-70px";
    } else if (resultadoFormatado < 30) {
        containerArrow.style.left = "0px";
    } else if (resultadoFormatado < 35) {
        containerArrow.style.left = "65px";
    }else {
        containerArrow.style.left = "140px";
    }
    

    titulo.textContent = `${nomeFormatado}, o seu IMC é: ${resultadoFormatado}`;
    conteudoForm.textContent = "";
}
