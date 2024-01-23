const mysql = require('mysql');
const config = require('../config');


const dbconfig = {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
}

//Funcion para conexion
let conexionDB;

const conexionMYSQL = () => {
    conexionDB = mysql.createConnection(dbconfig);

    conexionDB.connect((err) => {
        if(err){
            console.log(['db err'], err);
            setTimeout(conexionMYSQL, 2000);
        } else {
            console.log("DB conectada");
        }
    });

}

