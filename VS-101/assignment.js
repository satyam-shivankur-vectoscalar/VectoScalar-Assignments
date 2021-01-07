'use strict';

const a = [1, 2, 3, 4, 5];
const b = [5, 7, 3, 8, 9];

//A function is created with two arrays and operator name taken as parameters
const operation = function(a, b, operator) {
  const len_a = a.length;
  const len_b = b.length;
  const c = [];

  switch (operator) {
    case 'OR':
      // Loop to include elements from Array A
      for (let i = 0; i < len_a; i++) {
        c.push(a[i]);
      }
      /* Loop to include elemnts from Array B which are not in Array A
         to avoid repetition*/
      for (let i = 0; i < len_b; i++) {
        if (!a.includes(b[i]))
          c.push(b[i]);
      }
      break;
    case 'AND':
      // Loop to include elements from Array A which are also present in Array B
    	for (let i = 0; i < len_a; i++) {
      	if(b.includes(a[i]))
        	c.push(a[i]);
      }
      break;
    case 'MINUS':
      // Loop to include elements of Array A which are not present in Array B
    	for (let i = 0; i < len_a; i++) {
      	if(!b.includes(a[i]))
        	c.push(a[i]);
      }
      break;
    
    // Check for any invalid operation
    default:
      console.log('Invalid operation');
      return;
  }


  const result = Array Operation ${operator} has been performed on Array A of size:${a.length} and Array B of size:${b.length}and Output Array is of size:${c.length};
}

operation(a,b,'OR');
operation(a,b,'AND');
operation(a,b,'MINUS');

//Bonus : Is there a way to get an Array which has elements present only in one of Arrays
const either= function(a,b){
	const len_a = a.length;
  const len_b = b.length;
  let c = [];
  
  // (A-B) U (B-A)
  const aMinusB=operation(a,b,'MINUS');
  const bMinusA=operation(b,a,'MINUS');
  
  const result=operation(aMinusB,bMinusA,'OR');
  return result;
}

console.log(either(a,b));
