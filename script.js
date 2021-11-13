let largura = document.getElementById('txtM')
let cumprimento = document.getElementById('txtC')
let resultado = 0
let lista = document.getElementById('selDados')
let res = document.getElementById('res')
let valores = []
metros
function gerar() {
  //window.alert(Number(largura.value))
  //window.alert(Number(cumprimento.value))
  let largura1 = Number(largura.value)
  let cumprimento1 = Number(cumprimento.value)

  // RESULTADO FAZ A MULTIPLICAÇÃO
  resultado = largura1 * cumprimento1
  //window.alert(typeof resultado)
  // RESULTADO1 Modifica para 2 casas pós virgula
  let resultado1 = resultado.toFixed(2)
  //window.alert(typeof resultado1)
  // RESULTADO2 modifica para número
  let resultado2 = Number(resultado1)
  //window.alert(typeof resultado2)

  //window.alert(resultado)
  //valores.push(Number(largura.value))
  valores.push(resultado2)
  let item = document.createElement('option')
  item.text = `${resultado2}m² adicionado`
  item.value = `var${resultado2}`
  lista.appendChild(item)
  res.innerHTML = ''
  //apagar a informação antiga
  largura.value = ''
  cumprimento.value = ''
  //manter o foco no objeto
  largura.focus()
}

function calcular() {
  if (valores.length == 0) {
    window.alert('Por favor, adicione um número antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let quarentao = 28.3
    let teu = 0
    let aTeu = 0
    let teu2 = 0

    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }
    teu = soma.toFixed(2) / quarentao
    aTeu = Math.round(teu)
    teu2 = aTeu * 5

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} m² adicionado no sistema.</p>`
    res.innerHTML += `<p>Total de ${soma.toFixed(2)}m².</p>`
    res.innerHTML += `<p>Considerando que uma unidade de 40' tem 28,30m² e representa 2 TEU.</p>`
    res.innerHTML += `<p>O total em TEU a 1 de alto será: ${aTeu}TEU.</p>`
    res.innerHTML += `<p>O total em TEU a 5 de alto será: ${teu2}TEU.</p>`
  }
}
