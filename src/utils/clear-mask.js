const clearMask = (codigo) => {
  return codigo.replace(/( |\.|-)/g, '');
}

module.exports = clearMask