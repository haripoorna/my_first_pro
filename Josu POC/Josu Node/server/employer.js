var key = 'real12344321laer';
var encryptor = require('simple-encryptor')(key);

let obj = {
    UserName: 'Naveen',
    AuthToken: 'Biscuit'
}

let token = encryptor.encrypt(obj);

console.log(token);

var objjosn = encryptor.decrypt(token);

console.log(objjosn);
