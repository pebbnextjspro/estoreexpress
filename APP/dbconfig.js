require('dotenv').config(); // Load .env

const config = {
  server: process.env.SERVER,
  database: process.env.DATABASE,
  driver: process.env.DRIVER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    trustServerCertificate: true
  }
};

module.exports = config;
