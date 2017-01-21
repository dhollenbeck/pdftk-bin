# pdftk-bin
Bin version of pdftk


## Install

```
$ npm install --save pdftk-bin
```


## Usage

```js

// Conditionally install pdftk on elasticbeanstalk.
// On non-beanstalk environments like your development machinesdoes
// `pdftk-bin` does nothing. Therefore, you will need to install
//
// .
// set process.env.PATH and process.env.LD_LIBRARY_PATH
// point them to ./node_modules/pdftk-bin/vendor/...
require('pdftk-bin');

var Exec = require('child_process').exec;

function run(cmd, next) {
	Exec(cmd, function(err, stdout, stderr) {
		// if (err) return next(err);
		if (stderr) return next(null, cmd + ', ' + stderr + ', ' + stdout);
		next(null, stdout);
	});
}

exports.version = function(next) {
	var cmd = ['pdftk --version'];
	run(cmd, next);
};
```
