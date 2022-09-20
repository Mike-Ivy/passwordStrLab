function isStrongPassword(passWord) {
    if (passWord.length >= 8 && passWord.indexOf("password") == -1) {
        for (i=0; i<passWord.length; i++) {
            if (passWord.charCodeAt(i) >= 65 && passWord.charCodeAt(i) <= 90) {
                return true;
            }
        }return false;
    }else {
        return false;
    }
 }
 
 
 

