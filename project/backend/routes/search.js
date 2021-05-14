var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
	console.log(req.body);
	var mysql = require('mysql');
	let dbPool = mysql.createPool({
		host: 'localhost',
		user: 'yjc',
		password: '291131',
		database: 'CPD'
	});
	if (req.body.method === 1) {
		const { exec } = require('child_process');
		const inputFile = 'source/in.txt';
		const db = 'source/CPD'
		const outputFile = 'source/out.txt';
		exec(`blastp -query ${inputFile} -db ${db} -out ${outputFile} -outfmt 6;cat ${outputFile}`, (error, stdout, stderr) => {
			console.log(stdout);
		});
	} else {
		let sql = 'SELECT * FROM peptide,protein WHERE peptide.id=protein.peptide_id AND seq=?';
		let params = [];
		params.push(req.body.seq);
		dbPool.getConnection((err, connection) => {
			if (err) throw err;
			connection.query(sql, params, (error, results) => {
				connection.release();
				res.send(results);
				if (error) throw error;
			});
		});
	}
});

module.exports = router;