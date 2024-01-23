const config ={
    app: {
        port: process.env.PORT || 4000
    },
    db:{
        host: "",
        user: "",
        password: "",
        database: "",
        connectTimeout: 60000
    },
};

module.exports = config;