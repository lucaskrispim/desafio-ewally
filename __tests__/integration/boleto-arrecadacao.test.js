const request = require('supertest')
const express = require('express')
const routesPath = require('../../src/routes/controllers')

const app = express().use(express.json()).use('/api', routesPath)

describe('Test user endpoints', () => {
  it('should verify if api is work', async () => {

    const response = await request(app).get('/api/status')

    expect(response.status).toBe(200)
  })

  it('validação da linha digitável do boleto de arrecadação válido e campos sem máscara', async () => {

    const response = await request(app).get('/api/boleto/848900000002404201622015806051904292586034111220')

    expect(response.status).toBe(200)
    expect(response.body.barCode).toBe("84890000000404201622018060519042958603411122")
    expect(response.body.amount).toBe("20.42")
  })


  it('validação da linha digitável do boleto de arrecadação não válido e campos sem máscara', async () => {

    const response = await request(app).get('/api/boleto/83680000003002300481005222180569212001836093839')

    expect(response.status).toBe(400)
  })

})