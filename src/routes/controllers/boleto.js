const express = require('express')
const router = express.Router()
const { checkSchema, validationResult } = require('express-validator')
const Boleto = require('../../entities/boleto')
const { codeDecode } = require('../schemas/code')

router.get('/:code', checkSchema(codeDecode), (req, res) => {
  let boleto = null

  try {
    validationResult(req).throw()
    boleto = new Boleto(req.params.code)
  } catch (err) {
    return res.status(400).json(err)
  }

  let response = {
    "barCode": boleto.getBarcode(),
    "amount": boleto.getAmount()
  }

  if (boleto.getExpirationDate()){
    response = {...response, ...{"expirationDate": boleto.getExpirationDate()}}
  }

  return res.status(200).json(response)
})

module.exports = router