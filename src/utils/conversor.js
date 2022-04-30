

const convertToBoletoArrecadacaoCodigoBarras = (codigo) => {
  
  let codigoBarras = ''
  for (let index = 0; index < 4; index++) {
    const start = (11 * (index)) + index
    const end = (11 * (index + 1)) + index
    codigoBarras += codigo.substring(start, end)
  }
  return codigoBarras
}

const convertToBoletoBancarioCodigoBarras = (codigo) => {
  let codigoBarras = ''
  codigoBarras += codigo.substring(0, 3) // Identificação do banco
  codigoBarras += codigo.substring(3, 4) // Código da moeda
  codigoBarras += codigo.substring(32, 33) // DV
  codigoBarras += codigo.substring(33, 37) // Fator Vencimento
  codigoBarras += codigo.substring(37, 47) // Valor nominal
  codigoBarras += codigo.substring(4, 9) // Campo Livre Bloco 1
  codigoBarras += codigo.substring(10, 20) // Campo Livre Bloco 2
  codigoBarras += codigo.substring(21, 31) // Campo Livre Bloco 3
  return codigoBarras
}

module.exports = {convertToBoletoArrecadacaoCodigoBarras, convertToBoletoBancarioCodigoBarras}