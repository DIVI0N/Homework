var crypto = require('crypto');
var text = 'Hello';
var key = 'key';
var hash;

hash = crypto.createHmac('sha1', key).update(text).digest('hex');

console.log(hash);