module.exports = {
  type: 'mysql',
  username: 'root',
  password: 'Motorola3347$',
  database: 'smessenger',
  host: '34.66.33.216',
  entities:
    process.env.NODE_ENV === 'test'
      ? ['src/entities/*.ts'] // jest runs files using ts-jest, which parses .ts files
      : ['dist/entities/*.js'], // in production and development, we run compiled .js files
  synchronize: true
};
