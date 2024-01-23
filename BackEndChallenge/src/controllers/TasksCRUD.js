//File will contain all the logic to store, modify and delete taks in the database0
const config = require('../config');
const mysql = require('mysql2/promise')


exports.getAllTasks = async( req,res) => {
    try {
        // Create a MySQL connection
        // Create a MySQL connection pool
        const connection = await mysql.createConnection(config.db);
        // // Perform SELECT query
        const data = await connection.execute('SELECT * FROM tasks;');
        const rows = data[0];
        console.log(rows);
        // // Send the result as JSON
        res.json({ data: rows });
      } catch (error) {
        console.error('Error executing SELECT query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.saveNewTask = async(req, res) => {
    try {
        const connection = await mysql.createConnection(config.db);
        //get data from body
        const {descriptionTask, state} = req.body;
        const data = await connection.execute('INSERT INTO tasks (descriptionTask, state) VALUES (?, ?)',[descriptionTask, state])
        res.json({respone: "Success"});
    } catch (error) {
        console.error('Error executing SELECT query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}

exports.deleteAllTasks = async(req, res) => {
    try {
        const connection = await mysql.createConnection(config.db);
        const result = await connection.execute("DELETE FROM tasks");
        res.json({response:"Deleted Success"});
    } catch (error) {
        console.error('Error executing SELECT query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.deleteSelectedTasks = async(req, res) => {
    try {
        const connection = await mysql.createConnection(config.db);
        const result = await connection.execute("DELETE FROM tasks where state = 1");
        res.json({response:"Deleted selected Success"});
    } catch (error) {
        
    }
}