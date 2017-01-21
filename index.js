'use strict';
var delimiter = require('path').delimiter;
var pwd = process.env.PWD;
var bin = pwd + '/node_modules/pdftk-bin/vendor/linux/x64';

function isBeanstalk(){
	return process.env.PATH.indexOf('elasticbeanstalk') !== -1;
}

function setenv(env, path){
	var cur = process.env[env];
	if (!cur) {
		process.env[env] = path;
	} else if (cur.indexOf(path) === -1) {
		process.env[env] = process.env[env] + delimiter + path;
	}
}

// setup environment variables
if (isBeanstalk()) {
	setenv('LD_LIBRARY_PATH', bin);
	setenv('PATH', bin);
}
