module.exports = {
  
    development: {
      client: 'pg',
      connection: 'postgres://localhost/movies'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }
  
  };
