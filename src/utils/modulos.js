const modulo10 = (bloco) => {
  const codigo = bloco.split('').reverse()
  const somatorio = codigo.reduce((acc, current, index) => {
    let soma = Number(current) * (((index + 1) % 2) + 1)
    soma = (soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma)
    return acc + soma
  }, 0)
  return (Math.ceil(somatorio / 10) * 10) - somatorio
}

const modulo11Bancario = (bloco) => {
  const codigo = bloco.split('').reverse()
  let multiplicador = 2
  const somatorio = codigo.reduce((acc, current) => {
    const soma = Number(current) * multiplicador
    multiplicador = multiplicador === 9 ? 2 : multiplicador + 1
    return acc + soma
  }, 0)
  const restoDivisao = somatorio % 11
  const DV = 11 - restoDivisao
  if (DV === 0 || DV === 10 || DV === 11) return 1
  return DV
}

const modulo11Arrecadacao = (bloco) => {
  const codigo = bloco.split('').reverse()
  let multiplicador = 2
  const somatorio = codigo.reduce((acc, current) => {
    const soma = Number(current) * multiplicador
    multiplicador = multiplicador === 9 ? 2 : multiplicador + 1
    return acc + soma
  }, 0)
  const restoDivisao = somatorio % 11

  if (restoDivisao === 0 || restoDivisao === 1) {
    return 0
  }
  if (restoDivisao === 10) {
    return 1
  }
  
  return 11 - restoDivisao
}

module.exports = { modulo10, modulo11Bancario, modulo11Arrecadacao }