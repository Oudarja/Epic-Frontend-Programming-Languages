
/*
In JavaScript, you don't need to explicitly declare the data type of a variable or function parameter.
This is because JavaScript is a dynamically-typed language, which means the data type of a variable is
determined at runtime based on the value assigned to it.
*/
function isPalindrom(str)
{

    let len=str.length;
    let ok=true;
      for(let i=0;i<len/2;i++)
        {
              if(str[i]!=str[len-1-i])
                {
                  ok=false;
                  break;    
                }
        }

        return ok;
}


let check=isPalindrom("aabaa");
console.log(check);