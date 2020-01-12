serverDev = {
    PORT: 3000,
    JWT_SECRET: 'DJ4K6S156S',
    MONGO_URI: 'mongodb://localhost/zlote-usta'
}

serverProd = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI
}

if(process.env.NODE_ENV === "production") {
    module.exports = {
        server: serverProd
    }
} else {
    module.exports = {
        server: serverDev
    }
}

