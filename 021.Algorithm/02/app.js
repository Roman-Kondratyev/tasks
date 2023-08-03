// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)


const str = `Roman-123456789`;

function doPassword (str){
   if( str.length>=8) return`недостаточно символов`;
   let countNum=8;
   let countToUpperCase=0;
   let countToLowerCase=0;
   let counSymbol = 0;
   for(let i=0;i<str.length; i++){
   if( isNaN(str[i])){
     countNum++
    }else{
        str[i].toUpperCase()=== str[i]? countToUpperCase++ : countToLowerCase++;
    }

   }
   str.includes(`@`)||str.includes(`-`)||str.includes(`&`)||str.includes(`$`)? counSymbol++ : `ваш пороль не вдючает символ`
   return(countNum=== 0||countToUpperCase===0 || countToLowerCase===0 ? `ненадежный пороль`: `надежный пороль`)
};

let result = doPassword;
console.log (result)
