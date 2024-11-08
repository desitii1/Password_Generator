function generatepassword(passwordLength,includeLowercase,includeUppercase, includeNumbers, includeSymbols ){

    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase="abcdefghiklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols="`~!@#$%^&*()-_=+{}[]\|;:'<>,.?/\"\"";
    let allowedChars="";
    let password="";
    allowedChars+=includeLowercase? lowercase:"";
    allowedChars+=includeUppercase? uppercase:"";
    allowedChars+=includeNumbers? numbers:"";
    allowedChars+=includeSymbols? symbols:"";

   if(passwordLength < 0){
      return "your password length can not be zero";
   }
   if(allowedChars.length===0){
     return "please chose at least one option";
   }

   for( let i=0;i<passwordLength;i++){
     let index=Math.floor( Math.random()*allowedChars.length) ;
     password+=allowedChars[index];

   }


    return password;

}
const passwordLength=6;
const includeLowercase=false;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=false;



const password=generatepassword(passwordLength,includeLowercase,includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);
