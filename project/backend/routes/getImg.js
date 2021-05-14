const { rejects } = require('assert');
var express = require('express');
const { resolve } = require('path');
var router = express.Router();

router.get('/', (req, res, next) => {
    function child_processExecAsync(command) {
        return new Promise((resolve, rejects) => {
            const { exec } = require('child_process');
            exec(command, (error, stdout, stderr) => {
                if(error){
                    rejects(error);
                }else{
                    resolve(stdout)
                }
            });
        })
    }
    async function sendImg(){
        const lsStdout = await child_processExecAsync("ls public/images/carousel/");
        res.send(lsStdout).status(200);
    }
    sendImg();
});

module.exports = router;
