
var shell = require('shelljs');
const webpack = require('webpack');
const config = require('./config');
const path = require('path');
const express = require('express');

function compileAndServer(){
    let outputdir = path.join(config.root,'dist');
    process.stdout.write("正在启动前端服务\n");
    process.stdout.write("正在删除上次编译结果\n");
    shell.rm('-rf',outputdir);
    process.stdout.write("已删除上次编译结果\n");
    process.stdout.write("正在进行本次编译\n");
    let webpackConfig = require('./webpack.config.js');
    let boot=webpack(webpackConfig);
    boot.run(function(){
        process.stdout.write("本次编译已完成\n");
        process.stdout.write("正在启动express服务器\n");
        const app = express();
        app.get('/', function(req, res){
            let filePath = path.join(outputdir, 'index.html');
            res.sendFile(filePath);
        });
        app.get('/index', function(req, res){
            let filePath = path.join(outputdir, 'index.html');
            res.sendFile(filePath);
        });
        app.get('/login', function(req, res){
            let filePath = path.join(outputdir, 'login.html');
            res.sendFile(filePath);
        });
        app.get('/register', function(req, res){
            let filePath = path.join(outputdir, 'register.html');
            res.sendFile(filePath);
        });
        app.get('/searchRes', function(req, res){
            let filePath = path.join(outputdir, 'searchRes.html');
            res.sendFile(filePath);
        });
        app.get('/userInfo', function(req, res){
            let filePath = path.join(outputdir, 'userInfo.html');
            res.sendFile(filePath);
        });
        app.get('/editEssay', function(req, res){
            let filePath = path.join(outputdir, 'editEssay.html');
            res.sendFile(filePath);
        });
        app.get('/essayView/essid/:id', function(req, res){
            let filePath = path.join(outputdir, 'essayView.html');
            res.sendFile(filePath);
        });
        app.get('*.js', function(req, res, next) {
            req.url = req.url.replace('static','dist');
            next();
        });
        app.use(express.static(__dirname));
        let server=app.listen(3000, function(){
            var port = server.address().port;
            process.stdout.write("启动完成访问端口"+port+"\n");
        })
    });
}

compileAndServer();