const boletoBancarioLinhaDigitavel = require("./boleto-bancario")
const boletoArrecadacaoLinhaDigitavel = require("./boleto-arrecadacao")
const clearMask = require("../utils/clear-mask")

const validator = (codigo) => {
  const cod = clearMask(codigo);
  if (cod.length === 47) return boletoBancarioLinhaDigitavel(clearMask(codigo))
  if (cod.length === 48) return boletoArrecadacaoLinhaDigitavel(clearMask(codigo))

  return false
}

module.exports = validator