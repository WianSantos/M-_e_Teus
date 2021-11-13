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
  resultado = largura1 * cumprimento1
  //window.alert(resultado)
  //valores.push(Number(largura.value))
  valores.push(resultado)
  let item = document.createElement('option')
  item.text = `${resultado}m² adicionado`
  item.value = `var${resultado}`
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
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} m² adicionado no sistema.</p>`
  }
}
