const { modulo10, modulo11Arrecadacao } = require("../utils/modulos")
const clearMask = require('../utils/clear-mask')
const { convertToBoletoArrecadacaoCodigoBarras } = require('../utils/conversor')
 
const boletoArrecadacaoCodigoBarras = (codigo) => {

  if (!/^[0-9]{44}$/.test(codigo) || Number(codigo[0]) !== 8) return false
  
  const codigoMoeda = Number(codigo[2])
  const DV = Number(codigo[3])
  const bloco = codigo.substring(0, 3) + codigo.substring(4)
  
  let modulo
  
  if (codigoMoeda === 6 || codigoMoeda === 7){
   modulo = modulo10
  }else if (codigoMoeda === 8 || codigoMoeda === 9){ 
    modulo = modulo11Arrecadacao
  }else{ 
    return false
  }
  
  return modulo(bloco) === DV
}

const boletoArrecadacaoLinhaDigitavel = (codigo) => {
  
  const cod = clearMask(codigo)
  
  if (!/^[0-9]{48}$/.test(cod) || Number(cod[0]) !== 8) return false
  
  const validDV = boletoArrecadacaoCodigoBarras(convertToBoletoArrecadacaoCodigoBarras(cod))
  
  const codigoMoeda = Number(cod[2])
  
  let modulo
  
  if (codigoMoeda === 6 || codigoMoeda === 7){
     modulo = modulo10
  
  }else if (codigoMoeda === 8 || codigoMoeda === 9){
     modulo = modulo11Arrecadacao
  
  }else{ 
    return false
  }

  const blocos = Array.from({ length: 4 }, (v, index) => {

    const start = (11 * (index)) + index
    const end = (11 * (index + 1)) + index
    
    return {
      num: cod.substring(start, end),
      DV: cod.substring(end, end + 1),
    }

  })

  const validBlocos = blocos.every(e => modulo(e.num) === Number(e.DV))
  return validBlocos && validDV
}

module.exports = boletoArrecadacaoLinhaDigitavel