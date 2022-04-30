
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


  it('validação da linha digitável do boleto válido com máscara', () => {
    const result = validator('23793.38128 60007.827136 95000.063305 9 75520000370000');
    expect(result).toBe(true);
  });

  it('validação da linha digitável do boleto válido sem máscara', () => {
    const result = validator('23793381286000782713695000063305975520000370000');
    expect(result).toBe(true);
  });

  it('validação da linha digitável do boleto com blocos válidos', () => {
    const result = validator('23793381286000782713695000063305975520000370000');
    expect(result).toBe(true);
  });

  it('validação da linha digitável do boleto inválido', () => {
    const result = validator('23793.38128 60007.827136 95000.063305 4 75520000370000');
    expect(result).toBe(false);
  });

  it('validação da linha digitável do boleto com tamanho inválido', () => {
    const result = validator('23793.38128 6007.827136 95000.063305 4 75520000370000');
    expect(result).toBe(false);
  });

  it('validação do boleto com blocos válidos', () => {
    const result = validator('23793381286000782713695000063305975520000370000');
    expect(result).toBe(true);
  });

  it('validação do boleto inválido', () => {
    const result = validator('2379338128600078271369500006975520000370000');
    expect(result).toBe(false);
  });


})