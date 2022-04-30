const getBoletoArrecadacaoValor = (codigo) => {
  const prev = String((parseFloat(codigo.substring(4, 16))/100.0).toFixed(2))
  return (prev) ? prev.substring(0,1)+prev.substring(2):false
}

const getBoletoBancarioValor = (codigo) => {
  return String((parseFloat(codigo.substring(37, 47))/100.0).toFixed(2))
}


const getBoletoValor = (codigo) => {
  if (codigo.length === 47) return getBoletoBancarioValor(codigo)
  if (codigo.length === 48) return getBoletoArrecadacaoValor(codigo)

  return false
}

module.exports = getBoletoValor