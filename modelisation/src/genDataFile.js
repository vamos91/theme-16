const mysql = require('mysql2')
const fs = require('fs')
const cnx = require('./connection')
const tables = ['cocktail_recipe', 'ingredient', 'measurement']

tables.forEach((table) => {
    cnx.query(`select * from ${table}`, (err, result) => {
        if (!err) {
            fs.writeFile(`./data/${table}.json`, JSON.stringify(result, null, 4), "utf8", (err) => {
                if (err) {
                    console.log('error', err)
                } else {
                    console.log(`${table} file created...`)
                }
            })
        }
    })
});