const enviroments = {
  development:{
    host : 'localhost',
    user : 'postgres',
    password : '123456',
    database : 'samcryptodb',
  },
  production:{
    active:false
  }
}

module.exports = {
  enviroments: enviroments
}