module.exports = (req, res, next) => {
	console.log('Haha')
  res.header('X-Hello', 'World')
  next()
  return;
}