// Task_9

// Return the number of vowels in a string


function vowel_string(str1)
{
  let vowel = 'AEIOUaeiou';
  let vcode = 0;
  
  for(let i = 0; i < str1.length ; i++)
  {
    if (vowel.indexOf(str1[i]) !== -1)
    {
      vcode+= 1;
    }
  
  }
  return vcode;
}
console.log(vowel_string("Lucy Mary and Temioluwa"));