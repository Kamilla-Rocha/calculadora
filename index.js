

function calcular(tipoOperacao) {
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)

  let resultado;

  if(tipoOperacao=='soma'){
    resultado =numero1+numero2
    document.getElementById('resultado-soma').textContent = 'Soma: ' + resultado;

  } else if(tipoOperacao=='subtracao') {
    resultado = numero1 - numero2
    document.getElementById('resultado-subtracao').textContent = 'subtracao: ' + resultado;
  }else if(tipoOperacao=='multiplicacao'){
    resultado = numero1*numero2
    document.getElementById('resultado-multiplicacao').textContent = 'multiplicacao: ' + resultado;
  }else if(tipoOperacao=='divisao'){
    resultado = numero1/numero2
    document.getElementById('resultado-divisao').textContent = 'divisao: ' + resultado;
  }

    console.log(resultado)
}