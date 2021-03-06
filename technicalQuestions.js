// Q1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
var bar = null;
console.log(typeof bar === "object");  // logs true!
console.log((bar !== null) && (typeof bar === "object"));  // logs false

// Q2.  What will the code below output to the console and why?
(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//solution: 
a defined? false
b defined? true

// Q3. What will the code below output to the console and why?
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//solution: 
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar

// Q4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
// This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

// Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:

(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);

// Q5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

//Solution: The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

// Q6. Consider the two functions below. Will they both return the same thing? Why or why not?

//Solution: 
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

// Q6. What will the code below output? Explain your answer.
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

//Solution: 
0.30000000000000004
false

// Q7. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

//Solution: 
1
4
3
2

// Q8. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

//Solution: 
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

//Q9. Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

//Solution: 
function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
  }

//Second solution: 
function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function(y) { return x + y; };
    }
  }

 // Q10. Consider the following code snippet:
//(a) What gets logged to the console when the user clicks on “Button 4” and why?

// (b) Provide one or more alternate implementations that will work as expected.

 for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
    document.body.appendChild(btn);
  }

  //Solution: 
  for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) {
      return function() { console.log(i); };
    })(i));
    document.body.appendChild(btn);
  }

  //also works: 
  for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    (function (i) {
      btn.addEventListener('click', function() { console.log(i); });
    })(i);
    document.body.appendChild(btn);
  }

  //What will the following code output and why?
  var b = 1;
  function outer(){
       var b = 2
      function inner(){
          b++;
          var b = 3;
          console.log(b)
      }
      inner();
  }
  outer();


  //Solution: 
  function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}

//explaination: Output to the console will be “3”.

// There are three closures in the example, each with it’s own var b declaration. When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output.


// Consider the following code. What will the output be, and why?
(function () {
  try {
      throw new Error();
  } catch (x) {
      var x = 1, y = 2;
      console.log(x);
  }
  console.log(x);
  console.log(y);
})();

//Solution 
(function () {
  var x, y; // outer and hoisted
  try {
      throw new Error();
  } catch (x /* inner */) {
      x = 1; // inner x, not the outer one
      y = 2; // there is only one y, which is in the outer scope
      console.log(x /* inner */);
  }
  console.log(x);
  console.log(y);
})();


//Explanation: 
// var statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a with or catch block. However, the error’s identifier is only visible inside the catch block. It is equivalent to

// What will the following code output to the console and why:
var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
      return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

//Solution: 
undefined
John Doe

//Explanation: The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

//What is the output out of the following code? Explain your answer.
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

//Solution: 
The output of this code will be 456 (not 123).

// The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].

//Write a JavaScript function to find longest substring in a given a string without repeating characters.

//Solution 
function longest_substring_without_repeating_characters(input) {
  var chars = input.split('');
  var curr_char;
  var str = "";
  var longest_string = "";
  var hash = {};
  for (var i = 0; i < chars.length; i++) {
  curr_char = chars[i];
  if (!hash[chars[i]]) 
  { 
  str += curr_char; 
  hash[chars[i]] = {index:i};
  }
  else 
  {
  if(longest_string.length <= str.length)
  {
  longest_string = str;
  }
  var prev_dupeIndex = hash[curr_char].index;
  var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
  str = str_FromPrevDupe + curr_char;
  hash = {};
  for (var j = prev_dupeIndex + 1; j <= i; j++) {
  hash[input.charAt(j)] = {index:j};
  }
  }
  }
  return longest_string.length > str.length ? longest_string : str;
  }
  console.log(longest_substring_without_repeating_characters("google.com")); 
  
  console.log(longest_substring_without_repeating_characters("example.com")); 
  

  //Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

  //Solution: 
  function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));


// Write a function for searching JavaScript arrays with a binary search.

// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

//Solution: 
function array_binarySearch(narray, delement) {
  var mposition = Math.floor(narray.length / 2);

  if (narray[mposition] === delement){
     return mposition;
  }
  else if (narray.length === 1) 
  {
     return null;
  }
  else if (narray[mposition] < delement) {
     var arr = narray.slice(mposition + 1);
     var res = array_binarySearch(arr, delement);
     if (res === null)
     {
        return null;
     }
     else {
        return mposition + 1 + res;
     }
  }
  else {
     var arr1 = narray.slice(0, mposition);
     return array_binarySearch(arr1, delement);
  }
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 6));


// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


// Write a JavaScript program to copy a string to the clipboard.
const copy_to_Clipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

//Write a JavaScript program to run a given array of promises in series.
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

// Executes each promise sequentially, taking a total of 3 seconds to complete

runPromisesInSeries([() => delay(1000), () => delay(2000)]);

//Write a JavaScript program to get a random element from an array.
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
console.log(sample([3, 7, 9, 11]));

//Write a JavaScript program to hash the input string into a whole number.
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};

console.log(sdbm('name'));


//Write a JavaScript program to randomize the order of the values of an array, returning a new array.
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
const foo = [1, 2, 3];

console.log(shuffle(foo));

//Write a JavaScript program to get an array of elements that appear in both arrays.

const similarity = (arr, values) => arr.filter(v => values.includes(v));

console.log(similarity([1, 2, 3], [1, 2, 4]));

//Write a JavaScript program to get the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x));

//Write a JavaScript program to get the symmetric difference between two given arrays, after applying the provided function to each array element of both.
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

//Write a JavaScript program to create a specified currency formatting from a given number.

const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);

console.log(toCurrency(123456.789, 'EUR')); // currency: Euro | currencyLangFormat: Local
console.log(toCurrency(123456.789, 'USD', 'en-us')); // currency: US Dollar | currencyLangFormat: English (United States)
console.log(toCurrency(123456.789, 'USD', 'fa')); //currency: US Dollar | currencyLangFormat: Farsi
console.log(toCurrency(322342436423.2435, 'JPY')); //currency: Japanese Yen | currencyLangFormat: Local
console.log(toCurrency(322342436423.2435, 'JPY', 'fi')); //currency: Japanese Yen | currencyLangFormat: Finnish

//Write a JavaScript program to add an ordinal suffix to a number.

const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};

console.log(toOrdinalSuffix('1')); 
console.log(toOrdinalSuffix('4')); 
console.log(toOrdinalSuffix('50')); 
console.log(toOrdinalSuffix('123'));

//Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

console.log(uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));

//Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
console.log(zipObject(['a', 'b', 'c'], [1, 2])); 
console.log(zipObject(['a', 'b'], [1, 2, 3]));