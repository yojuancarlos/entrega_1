/** packages */

const CryptoJS = require("crypto-js");
const config = require("config");

/** encrypt password */
exports.EncrytPassword =(password)=>{
    let secretkey = config.get("secretkeys").Cryptojs;
    var encryptedPasword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPasword;
};