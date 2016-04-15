module.exports = {
  'env': 'dev',
  'port': process.env.PORT || 8080,
  'origins': ['http://localhost:8000'],
  'max-connections': 100,
  'logfile': 'kekocity.log',
  'food-size': 1,
  'food-start-amount': 100,
  'start-mass': 35,
  'max-mass': 85500,
  'border-size': 6000,
}
