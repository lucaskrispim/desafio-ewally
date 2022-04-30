
const request = require('supertest')
const express = require('express')
const routesPath = require('../../src/routes/controllers')
const validator = require('../../src/services/code-validator')

const app = express().use(express.json()).use('/api', routesPath)

describe('Test user endpoints', () => {
  it('should verify if api is work', async () => {

    const response = await request(app).get('/api/status')

    expect(response.status).toBe(200)
  })


  it('validação da linha digitável do boleto de arrecadação válido módulo 10 com máscara', () => {
    const result = validator('836200000005 667800481000 180975657313 001589636081')
    expect(result).toBe(true)  

  })

  it('validação da linha digitável do boleto de arrecadação válido módulo 10 sem máscara', () => {
    const result = validator('836200000005667800481000180975657313001589636081')
    expect(result).toBe(true)  

  })

  it('validação da linha digitável do boleto de arrecadação com blocos módulo 10 válidos', () => {
    const result = validator('836200000005667800481000180975657313001589636081')
    expect(result).toBe(true) 
  })

  it('validação da linha digitável do boleto de arrecadação inválido módulo 10', () => {
    const result = validator('836200000005667800481800180975657313001589636081')
    expect(result).toBe(false) 
  })


  it('validação da linha digitável do boleto de arrecadação válido módulo 11 com máscara', () => {
    const result = validator('85890000460-9 52460179160-5 60759305086-5 83148300001-0')
    expect(result).toBe(true)
  })

  it('validação da linha digitável do boleto de arrecadação válido módulo 11 sem máscara', () => {
    const result = validator('848900000002404201622015806051904292586034111220')
    expect(result).toBe(true)
  })

  it('validação da linha digitável do boleto de arrecadação inválido módulo 11', () => {
    const result = validator('848900000002404201622015809051904292586034111220')
    expect(result).toBe(false)
  })

  it('validação da linha digitável do boleto de arrecadação com identificação inválida', () => {
    const result = validator('536400000011331201380002812884627116080136181551')
    expect(result).toBe(false)
  })

  it('validação da linha digitável do boleto de arrecadação com moeda inválida', () => {
    const result = validator('842900000002404201622015806051904292586034111220')
    expect(result).toBe(false)
  })

  it('validação da linha digitável do boleto de arrecadação com tamanho inválido', () => {
    const result = validator('53640000001133120180002812884627116080136181551')
    expect(result).toBe(false)
  })

  it('validação do boleto de arrecadação', () => {
    const result = validator('836200000005667800481000180975657313001589636081')
    expect(result).toBe(true)
  })

  it('validação do boleto de arrecadação com blocos válidos', () => {
    const result = validator('836200000005667800481000180975657313001589636081')
    expect(result).toBe(true)
  })

  it('validação do boleto de arrecadação inválido', () => {
    const result = validator('836200000007800481000180975657313001589636081')
    expect(result).toBe(false)
  })

  it('validação do boleto de arrecadação com modulo11 específico', () => {
    const result = validator('858000000070438403281922630720192528304729600523')
    expect(result).toBe(true)
  })


})