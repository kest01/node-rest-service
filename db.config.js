module.exports = {
    HOST: "localhost",
    DB: "test",
    USER: "test",
    PASSWORD: "12345678",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};