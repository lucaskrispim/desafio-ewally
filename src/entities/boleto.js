const validator = require('../services/code-validator')
const codigoDeBarras = require('../utils/codigo-barras')
const valor = require('../utils/valor')
const getBoletoData = require('../utils/data-vencimento')

class Boleto {
  constructor(code) {

    if (validator(code)) {
      this.code = code
    } else {
      throw new Error('Invalid code!')
    }

  }

  getBarcode() {
    if (this.code) {
      return codigoDeBarras(this.code);
    } else {
      throw new Error('Invalid code!')
    }
  }

  getAmount() {
    if (this.code) {
      return valor(this.code);
    } else {
      throw new Error('Invalid code!')
    }
  }

  getExpirationDate() {

    if (this.code.length == 47 && getBoletoData(this.code)) {
      return getBoletoData(this.code);
    } else {
      return false
    }
  }

}

module.exports = Boleto