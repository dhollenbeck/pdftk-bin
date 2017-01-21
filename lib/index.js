'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var url = 'https://raw.githubusercontent.com/dhollenbeck/pdftk-bin/blob/master/vendor/';

module.exports = new BinWrapper()
	.src(url + 'linux/x64/libgcj.so.10', 'linux', 'x64')
	.src(url + 'linux/x64/pdftk', 'linux', 'x64')
	.dest(path.join(__dirname, '../vendor'))
	.use('pdftk');
