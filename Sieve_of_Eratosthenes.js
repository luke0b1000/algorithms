// Algorithm provided by https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// Good explaination of the process https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/v/sieve-of-eratosthenes-prime-adventure-part-4

//  Input: an integer n > 1.
 
//  Let A be an array of Boolean values, indexed by integers 2 to n,
//  initially all set to true.
 
//  for i = 2, 3, 4, ..., not exceeding √n:
//    if A[i] is true:
//      for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
//        A[j] := false.
 
//  Output: all i such that A[i] is true.


var sieveofE = function(upperBound){
  var table = {}; //set up the chart table
  for (var i = 2; i<= upperBound; i++){   //go from 2 to highest NUmber
    table[i] = true;      // set table = {2:true, 3:true...}
  }

  for (var i = 2; i<=Math.sqrt(upperBound); i++){   //start the loooping process
    if (table[i] == true) {   //if A[i] is true, it is still prime
      for (var j = i*2; j <=upperBound; j= j +i){   // starts off with the prime * 2 (prime + prime), then each incrementation is a multiple of i so j [j=i+i] is the first multiple, so the next one is j=j+i which expanded j=i+i+i, so each one will add another i
        table[j] = false; // set it equal to false since its a multiple
      }
    }
  } // at the end of this we will have a table with true as prime and false as not

  var primeTable = [];   //now we want primeTable to only contain the prime value separate from the false values
  for (key in table){   //loop through the table object 
    if (table[key]=== true){  //if the key is true
      primeTable.push(key);    // put the key into the primeTable
    }
  }
  return primeTable;

};
console.log(sieveofE(100));
