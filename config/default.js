module.exports = {
  'env': process.argv.indexOf('--prod') !== -1 ? 'prod' : 'dev',
  'port': process.env.PORT || 8080,
  'origins': ['http://localhost:8000', 'http://slither.io'],
  'max-connections': 1000,
  'logfile': 'slither.log',
  'food-colors': 23,
  'food-size': [35, 70],
  'food-amount': 22000,
  'game-radius': 216000,
};
