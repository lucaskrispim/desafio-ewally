const getBoletoArrecadacaoData = (codigo) => {

  if( /^0*$/.test(codigo.substring(23,30)))return false

  return codigo.substring(27, 29)+"/"+codigo.substring(25, 27)+"/"+codigo.substring(22, 23)+codigo.substring(24, 25)
}

const getBoletoBancarioData = (codigo) => {

  const vencimento = codigo.slice(33,37)
  const date = new Date(1997,9,8);
  date.setTime(date.getTime() + (vencimento * 24 * 60 * 60 * 1000));
  
  return ("0" + (date.getDate())).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear()

}


const getBoletoData = (codigo) => {
  if (codigo.length === 47) return getBoletoBancarioData(codigo)
  if (codigo.length === 48) return getBoletoArrecadacaoData(codigo)

  return false
}

module.exports = getBoletoData