const { modulo10, modulo11Bancario } = require("../utils/modulos")
const { convertToBoletoBancarioCodigoBarras } = require('../utils/conversor')

const boletoBancarioCodigoBarras = (codigo) => {
  
  if (!/^[0-9]{44}$/.test(codigo)) return false
  const DV = codigo[4]
  const bloco = codigo.substring(0, 4) + codigo.substring(5)
  return modulo11Bancario(bloco) === Number(DV)
}

const boletoBancarioLinhaDigitavel = (code) => {
  
  if (code.length === 47) {

    if (!/^[0-9]{47}$/.test(code)) return false
    const blocos = [
      {
        num: code.substring(0, 9),
        DV: code.substring(9, 10),
      },
      {
        num: code.substring(10, 20),
        DV: code.substring(20, 21),
      },
      {
        num: code.substring(21, 31),
        DV: code.substring(31, 32),
      },
    ]
    const validBlocos = blocos.every(e => modulo10(e.num) === Number(e.DV))
    const validDV = boletoBancarioCodigoBarras(convertToBoletoBancarioCodigoBarras(code))
    return validBlocos && validDV
  }
}

module.exports = boletoBancarioLinhaDigitavel 