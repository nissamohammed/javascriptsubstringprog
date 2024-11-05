//2) Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]
s = 'dog'
 a = [];
  for (m = 0; m < s.length; m++) 
  {
    for (n = m+1;n<s.length+1;n++) 
    {
      a.push(s.slice(m,n));
    }
  }

  console.log(a);