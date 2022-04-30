const express = require('express')

const router = express.Router()

const startedAt = Date.now()

router.get('/status', (req, res) => {
  res.status(200).json({env: 'Estamos no ar!',uptime: Date.now() - startedAt})
})

router.use('/boleto', require('./boleto'))

module.exports = router