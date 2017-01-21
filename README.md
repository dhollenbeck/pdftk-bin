# pdftk-bin
Bin Wrapper for pdftk


## Install

```
$ npm install --save pdftk-bin
```


## Usage

```js
var execFile = require('child_process').execFile;
var pdftk = require('pdftk-bin');

execFile(pdftk, ['--version'], function(err, version){
	console.log('version', version);
});
```
