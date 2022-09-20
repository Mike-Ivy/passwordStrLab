function isStrongPassword(passWord) {
    if (passWord.length >= 8 && passWord.indexOf("password") == -1) {
        return true;
    }else {
        return false;
    }
 }
 
console.log(isStrongPassword("password"));
console.log("ddd");
 
 

