'use strict';
var path = require('path');
var BinWrapper = require('bin-wrapper');
var base = 'https://raw.githubusercontent.com/dhollenbeck/pdftk-bin/vendor/';

console.log(base);

module.exports = new BinWrapper()

	.src(base + 'linux/x64/libgcj.so.10', 'linux', 'x64')
	.src(base + 'linux/x64/pdftk', 'linux', 'x64')

	.src(base + 'darwin/x64/libgcj.so.10', 'darwin', 'x64')
	.src(base + 'darwin/x64/pdftk', 'darwin', 'x64')

	.dest(path.join(__dirname, '../vendor'))
	.use('pdftk');
