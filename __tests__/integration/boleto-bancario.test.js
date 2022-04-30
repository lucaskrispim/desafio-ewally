const request = require('supertest')
const express = require('express')
const routesPath = require('../../src/routes/controllers')

const app = express().use(express.json()).use('/api', routesPath)

describe('Test user endpoints', () => {
  it('should verify if api is work', async () => {

    const response = await request(app).get('/api/status')

    expect(response.status).toBe(200)
  })

  it('validação da linha digitável do boleto válido e campos sem máscara', async () => {

    const response = await request(app).get('/api/boleto/21290001192110001210904475617405975870000002000')

    expect(response.status).toBe(200)
    expect(response.body.barCode).toBe("21299758700000020000001121100012100447561740")
    expect(response.body.amount).toBe("20.00")
    expect(response.body.expirationDate).toBe("16/07/2018")
  })

})