const codeDecode = {
  code: {
    in: 'params',
    isString: true,
    isLength: {
      options: {
        min: 47,
        max: 48
      },
    },
    errorMessage: 'Campo linhas digitáveis é inválido!',
  }
}

module.exports = {codeDecode};