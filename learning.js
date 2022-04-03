// javascript use "//" for comment


/*
This
is 
multiline
comment
*/

0/0 // NaN

1 + NaN // NaN

1 / 0 // Infinite

-1 / 0 // infinite

// for define first time variable use this
let aa = 8;
let bb = 2;
aa - bb //equal 10

// to update var value
aa = bb - 2;
aa // equal 6

let counter = 0;
counter++ // equal 1
counter-- // equal 0

// const --> work just like let but cant change value
const testconst = 3;
testconst = 2; // error
// let testconst = 1 // error
// Before use let and const --> user var(not recommend to use it)

typeof 1 //number
typeof '1' //string
typeof true // boolean

let h = 1;
let i = '1';
h + i // equal "11"

let a = '1';
let b = '2';
a + b //equal "12"
a - b //equal NaN 

//string indices
let e = 'sdfsdf';
e.length; //equal 6
e[0]; //equal "s"
e[-1]; //undefined --> not like python
e[0] = "t" // e[0] equal "s" --> not like python 

//string method
let message = "sdfsdf";
message.toUpperCase(); // all char are upper case
let TestTrim = "  sdfsd ";
TestTrim.trim(); //same with .strip() in python
let testindex = "asdfgh";
testindex.indexOf("asd"); //0
testindex.indexOf('z');//-1 (not found)
let testslice = "abcde";
testslice.slice(2); //"cde"
testslice.slice(0,2);//"ab" (from 0 to 1 like python)
// and .replace(old,new) --> same with python

//string escapes
"sdfsdf\'sdf" //"sdfsdf'sdf"
'sdfsdf\"sdf'//'sdfsdf"sdf'
"sdfsdf\nsdf" // saperate line same with python

//f string or .format() in javascript
let fstring = 'python';
`this is fstring in js --> ${fstring}` // "this is fstring in js --> python"

// null is value of nothing (must be assign to null)
// undefined is sdlkasjdfpowhewewef (not be assign)

//Math objects
Math.PI; // 3.145..3
Math.round(4.9) // 5
Math.abs(-1) // 1
Math.pow(2,5) // 32
Math.floor(4.32423) // 4
Math.round(Math.random()*10); // random 1 - 10

//to change string to number
parseInt("1"); //1
parseInt("1.23sdfsdf"); //1
parseInt("werwer1.2"); //NaN (firt char is not a number)
parseFloat("1"); //1 (not 1.0)
parseFloat("1.5sg"); //1.5

//comparison operator
'a' < 'b'; //true  
'B' < 'a'; //true ABC...abcd... ???
//see order here --> https://en.wikipedia.org/wiki/List_of_Unicode_characters 

// == ignore type, === consider both type and value
1=="1"; //true
1==="1"; // false
1!=="1" // true
0 == '' //true
0 == false //true
null == undefined // true


//IF statement
//Can nest another statement inside
//**false value --> false,NaN,null,undefined,"",0
//everything else is true!!!
let testif = 2;
if (testif > 1) {
    console.log("this is if");
}
else if (testif <=1) {
    console.log("this is elseif");
}
else {
    console.log("this is else")
}
// && = and in python
// || = or in python
//  ! = not in python 


// The Switch Statement
let day = 7;
// USING TRADITIONAL CONDITIONAL....
// if (day === 1) {
// 	console.log('MONDAY');
// }
// else if (day === 2) {
// 	console.log('TUESDAY');
// }
// else if (day === 3) {
// 	console.log('WEDNESDAY');
// }
// else if (day === 4) {
// 	console.log('THURSDAY');
// }
// else if (day === 5) {
// 	console.log('FRIDAY');
// }
// else if (day === 6) {
// 	console.log('SATURDAY');
// }
// else if (day === 7) {
// 	console.log('SUNDAY');
// }
// else {
// 	console.log('INVALID DAY');
// }


// USING A SWITCH INSTEAD...
switch (day) {
	case 1:
		console.log('MONDAY');
		break;
	case 2:
		console.log('TUESDAY');
		break;
	case 3:
		console.log('WEDNESDAY');
		break;
	case 4:
		console.log('THURSDAY');
		break;
	case 5:
		console.log('FRIDAY');
		break;
	case 6:
		console.log('SATURDAY');
		break;
	case 7:
		console.log('SUNDAY');
		break;
	default:
		console.log('INVALID DAY');
}
// EXAMPLE 2
let emoji = 'heart';
// Switch with overlapping cases...
switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
}

//Ternary Operator
// condition ? ifstate : elsestate
let testter = 7;
testter === "7" ? console.log("Its if") : console.log("Its else");
let status = 'offline';
//ex2
// Without ternary operator
// let color;
// if (status === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }
// One-liner using Ternary Operator...
let color = (status === 'offline') ? 'red' : 'green';
console.log(color);


//// Arrays ////
//same with python
//can use indices like string
let testarray = [1,2,43,true,null]; // create array with variable
new Array(1,2,3,1); // create new array
//Array can modify val with index (not like string)
let shoppinglist = [1,2,3,4];
shoppinglist[0]=2; // shoppinglist = [2,2,3,4]
shoppinglist[4]=5; // shoppinglist = [2,2,3,4,5]
// .push('sdfsdf') = .append('sdfsdf') in python but return 'sdfsdf'
shoppinglist.pop(); // return last value (5) and shoppinglist = [2,2,3,4]
// .Shift --> remove from start
// .Unshift --> add to start
// Concat array --> array1.concat(array2)
//includes("sdf") --> true if in array,false if not in array
//includes('sdf',index) --> check both value and index 
//array.reverse() --> return reverse array and array will changed
//.join('') --> similar with python
// .slice() --> like string (can use nagative index)
// array.splice(start,deletecount,iterm to insert)
// array.sort() --> update array with sorting


// Array reference in mem with keys, not array
// Array with const
//array allow to edit with own array as below (because not change key in memory)
const arrayconst = [1,2,3,4,5];
arrayconst.pop();
arrayconst[0] = 99;
// if own array ref by another array ---> not allow  ( exp)

// nested array like python



// Object 
// object = dict in python
//all key will convert to string (cant access with number or...)
let aaa = [1,2,3];
let bbb = [1,2,3];
aaa == bbb; //false mem is store some key not array ,like aaa ==> 2354345345 and bbb ==> 56745345543 so not the same
aaa === bbb;//false
const testobj = {
    "sdfsdf" : []
};
testobj["sdfsdf"] == []; // false --> same reason with array
// {} == {}; // false
// [] == []; // false
const testobj2 = testobj ;
testobj2 == testobj // true


//For loop
// for (Start; condition(to end);  increasing) {
//     operation
// }
// I think the flow its look like  ==>   start num --> meet the condition --> do something inside {} --> increasing start num --> ...
// example below
for (let i = 1; i <= 10; i++) { //or i+=3 if increasement by 3 
    console.log("hello");
}
//Do not run this code (infinite loop)
for (let j = 1; i>=1; i++){
    console.log("hell");
} //So bad

//For..OF (loop item)
/*
for (variable of iterable) {
	statement
} 
*/ // like python -->  for i in iterable : statement
//example 
let testiter = [1,2,3,4,5,6];
for (let t of testiter ) {
	console.log(t);
}
//BUT !!!!
//can not loop directly with object (not like python that can loop and result are keys of dict)
// Object.keys(obj) in js = (list(obj.keys())) in python
// Object.values(obj) in js = (list(obj.values())) in python
//example
testobjloop = {
    "a":1,
    "b":2
}
for (let k of Object.keys(testobjloop)) {
	console.log(k); // key of obj
}
for (let v of Object.values(testobjloop)) {
	console.log(v); // values of ojb
}
for (let ki in testobjloop){
	console.log(ki); //display key of obj
}
for (let kl in ['a','b','c']) {
	console.log(kl); //display  0 1 2 (because index is a key of array ??)
}



//While loop 
//example for loop
for (let i=0; i<=5; i++) {
	console.log(i);
}
// convert to while loop wiht same logic
let k=0;
while(k<=5) {
	console.log(i);
	k++
}


// Function 
/*
function funcName() {
	//dosomething
}
*/
function testfunc(testarg) {
	console.log(testarg);
}
testfunc(); //undefined (not error like python)

 // console.log("blahblahblah") ==> print("blahblahblah") in python
 //return ==> same return in python
 //but if set variable without return something --> var if undefined


 //Scope

 //function scope
function tttt() {
    let aaa = "testetset";
	const bbb = "teset";
	var ccc = "poaisdf";
}
tttt();
console.log(aaa) ;//error not defined (working only in function scope)
console.log(bbb); // error
console.log(ccc); // error

//Block scope
// let and const work only in scope
if (true) {
	let testbl = "sdfsdf";
	console.log(testbl); // this work
}
console.log(testbl); // this not work (also const)
// var work both in and out of scope
if (true) {
	var testbv = 'test';
	console.log(testbv);
} 
console.log(testbv); // it's work !!!

//for nested function 
//inside func can acces variable form parent function 

//Function Expression
const square = function(num) {
	return num*num;
}
square(7); // 49 (can use it because function is obj)


//Store func as variable 
function multiply(x,y) {
	return x*y;
}
const add  = function(x,y) {
	return x+y;
}
const operation = {
	"a": multiply,
	"b": add
} // so you can use obj as function like operation.a(1,2). so what's next ?


//Function as an argument
function repeat(f) {
    f();
    f();
}
function cry() {
    console.log("test");
}
repeat(cry) //output test 2 time

//Function as Return values
function multiplyby(num) {
	return function(x) {
		console.log(x * num);     
	}
}
const mystery = multiplyby(3) ;
mystery(2) //6
// same as const f=funtion() {statement} and return f
function makeBetweenFunc(a,b) {
	const range = []
	for (let i = a; i<=b; i++) {
		range.push(i)
	}
	return function(old) {
		if (range.indexOf(old) === -1) {
			return false
		}
		return true
	}
}
const testold = makeBetweenFunc(5,10);
testold(7) //// Noooo you noob

//try this\
function makeBetweenFunc2(a,b) {
	return function(old) {
		return (old >= a  && old <= b);
	}
}
const testold2 = makeBetweenFunc2(5,10);
testold2(7) /// this ok 


// Call back 
function testcallback() {
	alert("you has beed click");
}
const btn  = document.querySelector("button");
btn.addEventListener('click',testcallback); // when you click to botton --> alert("you has beed clik")
btn.addEventListener('click',function() {
	alert("something");
})// arg with function directly


//Hoisting ?????????????? what is that !!!!!!!


//forEach
// obj.forEach(function (num,idx))


const testeach = [1,2,3,4,5,6,7];
function plusOne(n) {
    console.log(n+1);
}
testeach.forEach(function (n) {
    console.log(n+1)
}) //2 3 4 5 ..
testeach.forEach(plusOne) // 2 3 4 5 ..
// tree version of for each
testeachobj = {
	"test": "asdfwefwef"
}
//ver1
testeachobj.forEach(function(e) {
	console.log(e.test.toUpperCase());
})
//ver2
for (let i of testeachobj) {
	console.log(i.test.toUpperCase());
}
//ver3
for (let i=0; i<= testeachobj.length; i++) {
	console.log(testeachobj[i].test.toUpperCase());
}


//Map
// map one array to another new array
const testmap = [1,2,3,4,5];
const testmapp = testmap.map(function (n) {
    return n +10 ;
})
console.log(testmap); // [1,2,3,4,5]
console.log(testmapp);// [12,12,13,14,15]
//example compare
const nummap = [1,2,3,4,5,6,7,8,9];
//map version
const nummapp = nummap.map(function (n) {
	return {
		"value": n,
		"is_even": n%2 === 0
	}
})//
//normal version
const nummapp2 = [];
for (let i of nummap) {
	nummapp2.push({
		"value": i,
		"is_even": i%2 === 0 
	})
}
console.log(nummapp);
console.log(nummapp2);

//Arrow function 
const testarro = function (x) {
    return x*2 ;
}
console.log(testarro(4)) //8
const testarrow = (x) => {
    return x*2 ;
}
console.log(testarrow(4))//8
const multiply = (x,y) => {
	return x * y;
}
multiply(2,3) // 6 


//arrow function with implicit returns --> only work with single expression
const testim = (x) => {
	x*10
}
console.log(testim(3)) ; //  30
// but we can more simplify as below 
const testim2 = x => x*10 ;
console.log(testim2(3)) // 30 wow!!!!!

//lets combine with map 
//const nummap = [1,2,3,4,5,6,7,8,9];
const nummaparr = nummap.map((n) => {
	return n*2;
}) 
const nummaparr2 = nummap.map(n => n*2)
console.log(nummaparr); // [2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(nummaparr2); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

//find 
// if return is true ---> return value 
// find if match in condition (return first match)
let movies = ["abc","afb","sdfwef"];
const moviematch = movies.find((m) => {
    return m.includes("ab");
})
console.log(moviematch) // abc 

//filter ---> same as find but return all match condition as an array 
// ex. return m< 5 ---> return an array that value <5 , because its return true but otherwiese return false
// return if true 
const testfil = [1,2,3,4,5,6,7,8];

const test1 = test.filter(function(n) {
    return n> 4 ;
})

const testf = function (n) {
    return n>4 ;
}

const test2 = testfil.filter(testf)

const test3 = testfil.filter((n) => {
    return n>4; 
})

const test4 = testfil.filter((n) => (n>4))

// all print same array
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4); 

//apply filter with obj query\
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);
const bigNums = nums.filter(n => n > 50);


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]


//All books rated over 4.3:
const goodBooks = books.filter(b => b.rating > 4.3);

// All books with fantasy as a genre:
const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
))

// all books that are either short stories or essays:
const shortForm = books.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))

// Simple search functionality:
const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
})


//Every
//return true if all obj in array return true (meet condition)
const test = [1,2,3,4,5,6,"sdfsdf",8];
const checknum = test.every((n) => ((typeof n) == 'number'))
console.log(checknum)//false (because some obj is not number)

//some
// same as every but at least one obj in array return true --> retun true


//sort
// cant sort number with just array.sort() --> this is bad sort because its convert all obj to string
//you need to slice before call this callback function
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :( 
const badSort = prices.slice().sort();

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);


// Sorting books by their rating:
books.sort((a, b) => b.rating - a.rating)


//reduce
const testreduce = [1,2,3,4,5];
const productreduce = testreduce.reduce((previousReturn,currentValue) => {
	return previousReturn * curentValue ; // the first previousReturn is 0 
}) // 120 (1*2 , 2*3=6 -> 6*4=24-> 24*5=120)
// you can initial the first value as below example
const productreduce2 = tesrtreduce.reduce((pro,next) => {
	return pro + next ;
},1000) // first pro is 1000 not 0


// you can apply with max or min value in array
// another example 
const  votes = ['a','b','a','b','b','b','a'];
const vsummary = votes.reduce((p,n) => {
	if (p[n] == undefined) {
		p[n] = 1;
	}
	else {
		p[n] += 1
	}
	return p;
},{})
console.log(vsummary)

const vsummary2 = votes.reduce((p,n) => {
	p[n] = (p[n] || 0) + 1 ; // undefined || 0 = 0 
	return p
},{})

//more example 
const groupedByRatings = books.reduce((groupedBooks, book) => {
	const key = Math.floor(book.rating);
	if (!groupedBooks[key]) groupedBooks[key] = []; // !undefined = true --> so first time will create []
	groupedBooks[key].push(book)
	return groupedBooks;
  }, {})


// default Paremeter
// function test(x,y=1) {statement}   if call function without assign y ---> setup y =1


//spread
//see example 
const testsp = [1,2,3,4,5];
let testspstr = "sdfsdf"; // can spread to 's' 'd' 'f' ...
Math.max(...testsp);//Math.max(1,2,3,4,5)

//spread array literals
const sp1 = [1,2,3,4,5];
const sp2 = [3,4,5,6,4];
const sp3 = [...sp1,...sp2];
const sp4 = sp1 + sp2;

//spread objects literals
const feline = {
	legs: 4,
	family: 'Felidae'
  };
  
const canine = {
family: 'Caninae',
furry: true,
legs: 4
};

const dog = {
...canine,
isPet: true,
adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
...feline,
isGrumpy: true,
personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
...canine,
...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
...canine,
legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
...catDog
}

const random = [...'hello', {
...catDog
}]

//The arguments object
//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sum() {
//It is NOT an array, we have to turn it into one if we want to use array methods
const argsArr = [...arguments]
return argsArr.reduce((total, currVal) => {
	return total + currVal
})
}

// No arguments object inside of arrow functions :(
const multiply = () => {
console.log(arguments);
}

// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest:
/// this is *args in pythonnnn !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! this this this !!!!
function sum(...nums) {
return nums.reduce((total, currVal) => {
	return total + currVal
})
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
console.log('first', first)
console.log('last', last)
console.log('titles', titles)
}

// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
nums.reduce((total, currVal) => total * currVal)
)



//Array destructuring
const raceResults = [
'Eliud Kipchoge',
'Feyisa Lelisa',
'Galen Rupp',
'Ghirmay Ghebreslassie',
'Alphonce Simbu',
'Jared Ward'
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring: --> assign multiple variable 
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults; 
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;// (apply with spread)
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]


// Object destructuring
const runner = {
	first: "Eliud",
	last: "Kipchoge",
	country: "Kenya",
	title: "Elder of the Order of the Golden Heart of Kenya"
  }
  
  // const {
  //   first,
  //   last,
  //   time
  // } = runner;
  
  const {
	country: nation, // nation = "Kenya". but country is not defined
	title: honorific // honorific = "Kipchoge". but country is not defined 
  } = runner; 
  
//   const {
// 	first, // first = "Eliud"
// 	last,  // last = "Kipchoge"
// 	...other  // {country: "Kenya",title: "Elder of the Order of the Golden Heart of Kenya"}
//   } = runner;
  


// Destructuring parameters 

const runnerr = {
first: "Eliud",
last: "Kipchoge",
country: "Kenya",
title: "Elder of the Order of the Golden Heart of Kenya"
}

// Rather than destructuring INSIDE the function body
// function print(person) {
//   const {
//     first,
//     last,
//     title
//   } = person;
//   console.log(`${first} ${last}, ${title}`)
// }

// We can unpack the values we want right in the parameter list:
function print({
first,
last,
title
}) {
console.log(`${first} ${last}, ${title}`)
}
//print(runnerr); 

const response = [
'HTTP/1.1',
'200 OK',
'application/json',
]

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
console.log(`Status: ${statusCode}`)
}
parseResponse(response); //statusCode = "200 OK"


// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }




const getStats = (arr) => {
const max = Math.max(...arr);
const min = Math.min(...arr);
const sum = arr.reduce((sum, r) => sum + r);
const avg = sum / arr.length;
// Using the new shorthand property syntax:
return {
	max,
	min,
	sum,
	avg
}
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

function pick(arr) {
//return random element from arr
const idx = Math.floor(Math.random() * arr.length);
return arr[idx];
}

function getCard() {
const values = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K',
	'A'
];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
const value = pick(values);
const suit = pick(suits)
return {
	value, //javascript auto create key same name as value
	suit
};
}


//Dynamic key --> assign key as an array 
const role = 'host';
const personn = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'

// The old way: 
// Make the object
// const team = {};
// Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

// USING COMPUTED PROPERTIES!
const team = {
  [role]: personn,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
}

// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   }
// }

const addProp = (obj, k, v) => ({
  ...obj,
  [k]: v
})
const res = addProp(team, 'happy', ':)')



//Adding function as properties --> call method 
// Adding methods to an object!
const math = {
	numbers: [1, 2, 3, 4, 5],
	add: function (x, y) {
	  return x + y;
	},
	multiply: function (x, y) {
	  return x * y;
	}
  }
  
// To execute multiply:
math.add ; // function (x,y) ...
math.multiply(5, 9); //45
//but you can write in shorthand syntax as below 
const auth = {
	username: 'TommyBot',
	login() {
	  console.log("LOGGED YOU IN!")
	},
	logout() {
	  console.log("GOODBYE") // logout is keys , console.log() is value
	}
  }



//This 
//this --> refer to object in scope 
function sayHi() {
	console.log("HI")
	//this refers to the window (global scope object in the browser)
	console.log(this);
}
  
const greet = function () {
	//this refers to the window (global scope object in the browser)
	console.log(this);
}

function sayHi() {
	console.log("HI")
	//this refers to the window (global scope object in the browser)
	console.log(this);
  }
  

const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
	//In a method, this refers to the object the method "lives" in:
		const {
			first,
			last,
			nickName
		} = this;
		return `${first} ${last } AKA ${nickName}`;
},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`)
}
}


//in obj we not write in arrow function because "this" in arrow refer to window scope not in containing scope !!
//see example below 

  
const personnn = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
fullName() {
	//In a method, this refers to the object the method "lives" in
	const {
	first,
	last,
	nickName
	} = this;
	return `${first} ${last } AKA ${nickName}`;
},
printBio() {
	console.log(this);
	const fullName = this.fullName();
	console.log(`${fullName} is a person!`)
},
laugh: () => {
	//Arrow functions don't get their 'own' this.
	console.log(this);
	console.log(`${this.nickName} says HAHAHAHAH`)
	}
  }
  
  // INVOCATION CONTEXT MATTERS!!!
  personnn.printBio(); //THIS refers to the person object
  
  const printBio = personnn.printBio;
  printBio(); //THIS refers to window object


const anno = {
	p : ['a','b','c','d','e','f'],
    pickp : function () {
        const result = this.p[Math.floor(Math.random()*((this.p).length))] ;
        return result;
    },
    start : function () {
        this.timerId = setInterval(function() {
            console.log(anno.pickp()) // cant use this because setInterval is refer to window obj
            //but  in this case you can use this with arrow func because  this ins arr func is refer to parent obj --> anno
        },5000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log("stop success")
    }
}


//apply object + method 

// deck card 
//deck, shuffle, draw,
//using saperate function
function deckcard() {
    const initial =  {
        "suit" : ['hearts', 'diamonds', 'spades', 'clubs'],
        "values" : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    } ;
    let deck = [] ;
    //innitial deck 
    for (let i of initial["suit"]) {
        for (let j of initial["values"].split(",")) {
            deck.push({
                "suit": i,
                "values": j
            })
        }
    }
    //shuffle state
    for (let i = deck.length - 1; i > 0; i--) {
        // random index before current
        let shuffleindex = Math.floor(Math.random() * (i+1));
        //swap card
        [deck[i], deck[shuffleindex]] = [deck[shuffleindex], deck[i]];
    }
    return (deck);
}

function drawcard(deck,cards, num=1) {
    const currentcards = [];
    for (let i = 0; i < num; i++) {
        let pushvalue = deck.pop()
        cards.push(pushvalue);
        currentcards.push(pushvalue);   
        
    }
    return currentcards;
}


// const inideck = deckcard() ; // initialdeck + shuffle in one function 
// const drawncards = []; // array of all card drawned
// const player1 = drawcard(inideck, drawncards, 2) ; // array of 2 card
// const player2 = drawcard(inideck, drawncards, 2) ; // array of 2 card
// const pokerHand = drawcard(inideck, drawncards, 5) ; // array of 6 card


// Using obj and method
// we need to sap ini and shuffle 
const mydeck = {
    "deck": [],
    "drawnCards": [],
    "suit" : ['hearts', 'diamonds', 'spades', 'clubs'],
    "values" : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    "iniDeck": function () {
        //innitial deck 
		const {deck,suit,values} = this;
        for (let i of suit) {
            for (let j of values.split(",")) {
                deck.push({
                    "suit": i,
                    "values": j
                })
            }
        }
		return deck ; // mydeck.deck = 52 arrays with ini deck
	},
	"shuffleDeck": function() {
        //shuffle state
		//using '''fisher yates shuffle''' algorithum
        for (let i = this.deck.length - 1; i > 0; i--) {
            // random index before current
            let shuffleindex = Math.floor(Math.random() * (i+1));
            //swap card
            [this.deck[i], this.deck[shuffleindex]] = [this.deck[shuffleindex], this.deck[i]];
        }
        return (this.deck);
    },
    "drawCards" : function(num=1) {
        const currentcards = [];
        for (let i = 0; i < num; i++) {
            let pushvalue = this.deck.pop()
            this.drawnCards.push(pushvalue);
            currentcards.push(pushvalue);   
    }
        return currentcards;
    }
}

// mydeck.shuffledDeck();
// const p1 = mydeck.drawCards(2);
// const p2 = mydeck.drawCards(2);
// const po = mydeck.drawCards(5);

// lets make all of them refactoring
const makeDeck = () => {
	return {
		"deck": [],
		"drawnCards": [],
		"suit" : ['hearts', 'diamonds', 'spades', 'clubs'],
		"values" : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		"iniDeck": function () {
			//innitial deck 
			const {deck,suit,values} = this;
			for (let i of suit) {
				for (let j of values.split(",")) {
					deck.push({
						"suit": i,
						"values": j
					})
				}
			}
			return deck ; // mydeck.deck = 52 arrays with ini deck
		},
		"shuffleDeck": function() {
			//shuffle state
			//using '''fisher yates shuffle''' algorithum
			for (let i = this.deck.length - 1; i > 0; i--) {
				// random index before current
				let shuffleindex = Math.floor(Math.random() * (i+1));
				//swap card
				[this.deck[i], this.deck[shuffleindex]] = [this.deck[shuffleindex], this.deck[i]];
			}
			return (this.deck);
		},
		"drawCards" : function(num=1) {
			const currentcards = [];
			for (let i = 0; i < num; i++) {
				let pushvalue = this.deck.pop()
				this.drawnCards.push(pushvalue);
				currentcards.push(pushvalue);   
		}
			return currentcards;
		}
	}
}

//to use it 
const deck1 = makeDeck() ;
deck1.iniDeck()







// The most exiting topic in javascript ---> DOM !!!!! (Cole said, not me)
//selecting 
const testfirstdom = document.getElementById("");
const testtag = document.getElementsByTagName(""); // return data in HTMLCollection list (not in array)


//To select all li's
document.getElementsByTagName('li');

// To select all h1's (there's only one on this page):
document.getElementsByTagName('h1');

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
inputs[0]; //this works
inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!
const inputsarr = [...inputs] // store as an array
for (let i  of inputs) {
	console.log(i) // return html element
	console.log(i.value) // return value in each element
}

// To select all elements with the class of 'special':
document.getElementsByClassName('special');

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName('special');
for (let el of specials) {
  console.log(el);
}

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop() //this works because it's now an array!


// ****************
// querySelector
// return the first 
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');

//To find the fist input and type = "password"
document.querySelector("input[type='password']");




// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');


//To Manupulate that selector 
const testinner = document.querySelector("ul") ;
testinner.innerText // return al text like in browser
testinner.textContent //retrun all text like in html file (give you everything)
testinner.innerHTML // all content inside tag
const testinputs = document.querySelectorAll("input");
testinputs[0].value // value in input form
////place holder
const testa = document.querySelector("a");
testa.href // return href
const testimg = document.querySelector("img");
testimg.src // return src of image
const testatt = document.querySelector("input['type=reange']");
testatt.getAttribute("max") // return attribut inside htmltage
testatt.setAttribute("max","500") // change att

const firstli = document.querySelector("li");
firstli.parentElement // return parent element
firstli.nextElementSibling // next element
firstli.previousElementSibling // previos element

const firstul = document.querySelector("ul");
firstul.children //return nested element (HTMLcollection)

//to change multiple element 
// just for loop 
// Select all LI's on the page:
const allLis = document.querySelectorAll('li');

// One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
}

//Another option using for...of:
for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
}


// dom with style

const testcolor = document.querySelector("h1");
testcolor.style.color // "" //onlywork innline style 
testcolor.style.color = 'black' // change inline style


// We can use getComputedStyle to figure out the ACTUAL styles(ex. hover and etc.) that are applying:
const teststyle = getComputedStyle(testcolor);
teststyle //return all style 
teststyle.color // 

//Manupulating style with class
const testclass = document.querySelector("#todo .todo")
//chage css style with change class
testclass.getAttribute("class") // return class namd
testclass.setAttribute("class","todo done") // add a new class ="done" (with new css style)\
//easier way to do this 
testclass.classList.add("done") // add "done" class to classlit
testclass.classList.remove("done") // remove done class
testclass.classList.toggle('done') // add if not exist(and return true) or remove if exist(and return false)


//to creatign elements
// Make a new empty img element:
const newImg = document.createElement('img');
// Add a src:
newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// Change its width:
newImg.style.width = "300px";

//Add it to the end of the body:
document.body.appendChild(newImg); // appendChild --> append to the end of body


// Create a new anchor tag
const newLink = document.createElement('a');
// Set its innerText:
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
// Set its src:
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

// Select the first paragraph:
const firstP = document.querySelector('p');
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);


const testul = document.querySelector("ul");
const newli = document.createElement('li');
newli.innerText = "I am New li";

// append ele to the last child
testul.appendChild(newli); //

// insert ele befoer specific ele
const thefirstli = document.querySelector("li.todo");
testul.insertBefore(newli,thefirstli);
const thelasttodo = document.querySelectorAll('li.todo')[2];
testul.insertBefore(newli,thelasttodo); 

//insert with adjacentelement
//afterbegin
//beforebegin
//afterend 
//beforeend
testul.insertAdjacentElement("afterbegin",newli);

//append  ele with append and prepend
testul.append(newli);
testul.prepend(newli);

//to remove child
testul.removeChild(newli);

//or just remove without child 
newli.remove() // and newli is gone

/////////////////
//    Event    //
/////////////////
//to add inline event 
//click --> onclick
// mouseover --> onmouseover

//to and event with js 
const testev = document.querySelector("button");
testev.onclick = alert("something");
testev.onclick = () => {
	console.log("something");
}
// BUT !! cole not recommend to use this above

//Lets see this below
testev.onclick = function() {
	console.log("the first");
}

testev.onclick = function() {
	console.log("the second");
}
//so "the first never displaying" 

// addEventListener
//both console.log and alert are active because testev.onclick is not config
testev.addEventListener("click",function() {
	console.log("thisisclick");
})
testev.addEventListener('click',function() {
	alert("thisisalertclick");
})

//let's make some fun with eventlistner
const playbtn = document.querySelector('button');

// random button
playbtn.addEventListener('mouseover', function() {
	console.log('MOUSED OVER ME!');
	//window w and h are flexible window size. So
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

// change bg to green if btn was clicked
playbtn.addEventListener('click', function() {
	btn.innerText = 'YOU GOT ME!';
	document.body.style.backgroundColor = 'green';
});

//Events on multiple elements

const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];
const changeColor = function() {
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor; // this is refer to obj in scope --> box
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor); 
}


const inputkey = document.querySelector("#username");
inputanykey = inputkey.addEventListener("keypress",function(event) {  /// *** event = InputEvent obj *** 
	console.log(event) // display key
})
inputkeydown = inputkey.addEventListener("keyup", function() {
	console.log("KEY Up!!"); // display if type keyup
})


// do something with other keys (ex. enter)\
const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') { // just enter
		if (!this.value) return; //if input is empty, skip everything
		//to add a new item to list
		const newItemText = this.value; // user input
		const newItem = document.createElement('li');
		newItem.innerText = newItemText; 
		itemsUL.appendChild(newItem);// display as l in ul
		this.value = ''; //empty textbox after enter
	}
});

////////////////////////////////////////
//to submit form without refresh page //
////////////////////////////////////////
const  testform = document.querySelector('#signup-form');
// create var in global for doing something out of scope
const  cc = document.querySelector("#cc")

//submit
testform.addEventListener("submit",function(e) {
	alert("submited form");
	console.log("cc", cc.value); // extract form data (for checkboc we use obj.checked)
	// can modify something on the page
	// can modify data on database
	//totally up to you XD
	e.preventDefault(); // page not reload (not actually submitting but we still can get form data XD)
})

//to log the form every input change
const formData  = {};
testform.addEventListener("input",(e) => {
	console.log("cc change!!",cc);
	formData["cc"] = e.target.value ; // see detail InputEvent obj from f12
})

//if you assign name for each tag
//so you can loop for all input tag
testform.addEventListener('input', (e) => {
	formData[e.target.name] = e.target.value ; // just more dynamicly XD
})
//see cole using destructuring and appply for different input key 
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const formDataCole = {};
// ONE callback works for any number of inputs!!
for (let input of [ creditCardInput, termsCheckbox, veggieSelect ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formDataCole[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}
//more option (insert form as a parent of these element)
const formAll = document.querySelector("form.myform")
formAll.children //HTMLCollection
formAll.children[0] // first html 
formAll.children[0].nodeName //uppercase tage name 


//CALL STACK !!!!
//function in function in function
//stack untill the return real value (not function)

//javascript is single threaded ---> cant do many job in one time
//the browser writing in C++
const btnugly = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth; // client browser window width
		const elRight = element.getBoundingClientRect().right; //right position of element
		const currLeft = element.getBoundingClientRect().left; // left position of element
		if (elRight + amount > bodyBoundary) {
			onFailure();
		}
		else {
			element.style.transform = `translateX(${currLeft + amount}px)`; //move right from currleft
			onSuccess();
		}
	}, delay);
};

// LOOK AT THIS UGLY MESS!
moveX(
	btnugly,
	300,
	1000,
	() => {
		//success callback
		moveX(
			btnugly,
			300,
			1000,
			() => {
				//success callback
				moveX(
					btnugly,
					300,
					1000,
					() => {
						//success callback
						moveX(
							btnugly,
							300,
							1000,
							() => {
								//success callback
								moveX(
									btnugly,
									300,
									1000,
									() => {
										//success callback
										alert('YOU HAVE A WIDE SCREEN!');
									},
									() => {
										//failure callback
										alert('CANNOT MOVE FURTHER!');
									}
								);
							},
							() => {
								//failure callback
								alert('CANNOT MOVE FURTHER!');
							}
						);
					},
					() => {
						//failure callback
						alert('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				alert('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		alert('CANNOT MOVE FURTHER!');
	}
);


//So we have promise
const simplePromise = new Promise(function (resolve, reject) {
	//resolve(); // PromiseStatus --> "resolve" 
	//reject(); // PromiseStatus --> "reject"
	setTimeout(function () {
		const rand = Math.random();
		if (rand < 0.5) {
			resolve();
		}
		else {
			reject();
		}
	},3000)
});
// willGetYouADog // return "Promise" obj 
simplePromise.then(function() {
	console.log("this is then equal resolve"); // 
});
simplePromise.catch(() => {
	console.log("this is catch equal reject"); //error Uncaught (in promise)
});




//Write promise as a function !!
const promiseFunction = function() {
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
			const rand = Math.random();
			if (rand < 0.5) {
			resolve();
			}
			else {
			reject();
			}
		},3000);
	});
};

promiseFunction()
	.then(function() {
		console.log("this is resolve");
	})
	.catch(() => {
		console.log("this is reject");
	});  // can call to method in one function


//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
//
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => { // takes 1 second to resolve or reject the promise
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) { // data is not undefined
				resolve({ status: 200, data }); //resolve with a value!
			}
			else { // data is undefinded (not in pages)
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => { // res = {status: 200}
		console.log('Status Code', res.status); // 200
		console.log('Data', res.data);// 
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs') // reject
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => { // this line will run 
		console.log(res.status);
		console.log('REQUEST FAILED');
	});


// fro multiple callback
// the old ways -->  ahh look like same callback hell !!
fakeRequest('/users').then((res) => {
	const id = res.data[0].id;
	fakeRequest(`/users/${id}`).then((res) => {
		const postId = res.data.topPostId;
		fakeRequest(`/posts/${postId}`).then((res) => {
			console.log(res);
		})
	})
})
.catch((err) => { // this will catch only frist call !!
	console.log('OH NO!', err);
})


//let regular promise chaining 
fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => { // catch all those function call 
		console.log('OH NO!', err);
	});


//recap from movex

// const btnugly = document.querySelector('button');
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth; // client browser window width
// 		const elRight = element.getBoundingClientRect().right; //right position of element
// 		const currLeft = element.getBoundingClientRect().left; // left position of element
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`; //move right from currleft
// 			onSuccess();
// 		}
// 	}, delay);
// };

const movex = (element, amount, delay) =>  {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth; // client browser window width
			const elRight = element.getBoundingClientRect().right; //right position of element
			const currLeft = element.getBoundingClientRect().left; // left position of element
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`; //move right from currleft
				resolve();
			}
		}, delay);
	})
}
movex(btnugly,300,1000)
	.then(() => {
		return move(btnugly,300,1000)
	})
	.then(() => {
		return move(btnugly,300,1000)
	})
	.then(() => {
		return move(btnugly,300,1000)
	})
	.then(() => {
		return move(btnugly,300,1000)
	})
	.then(() => {
		return move(btnugly,300,1000)
	})
	.then(() => move(btnugly,300,1000)) // or just this format (if return single expression)
	.catch((response) => {
		console.log(`Cannot Move! Body is ${response.bodyBoundary}px wide`);
		console.log(`Element is at ${response.elRight}px, ${response.amount}px is too large!`);
	});






//Intro to AJAX (asynchronous javascript ans xml)
//request ()
//The idea of AJAX is using request that can make via javascript asynchronously (load or send data from database without reload page)

//JSON


//XMLHttpRequests
//chaining request with callback in callback (Ahhh!)
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() { //load mean this request is exist
	console.log('IT WORKED!!!'); // this.responseText is JSON response
	const data = JSON.parse(this.responseText); //convert JSON to js obj
	for (let planet of data.results) {
		console.log(planet.name);// so you can create ele and apply it to html XD
	}
	const filmURL = data.results[0].films[0]; // get new URL from response
	const filmReq = new XMLHttpRequest(); // make a new request with new URL
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', () => { //error mean this request does not exist
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');

//So let see a better way --> Fetch !!
//fetch recieve url and return response with promise value (resolve or reject value)
//normally fetch.catch will run if no response (ex. when internet offline)
//so we need to write with this below logic

fetch('https://swapi.co/api/planetsuy21/') // fetch is promise obj
	.then((response) => { //respone is resolve value
		if (!response.ok) //
			throw new Error(`Status Code Error: ${response.status}`); //make and error ---> then .catch will run

		return response.json();
	})// .json() is promise obj and apply promise chaining as we learn
	.then((data) => { 
		for (let planet of data.results) {
			console.log(planet.name);
		//if we have to fetch new request --> just use promise chaining like this
		console.log("fetch again")
		const ffilmURL = data.results[0].films[0];
		return fetch(ffilmURL);
		}
	})
	.then((response) => {
		if (!response.ok) //
			throw new Error(`Status Code Error: ${response.status}`); //make and error ---> then .catch will run

		return response.json();
	})
	.then((data) => { 
		console.log(data)
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!'); 
		console.log(err); //Error: `Status Code Error: ${response.status}`
	});


//More use as a function !!!

const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next); //need to return as promise because next .then will not working 
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => { //for the first fetch we need to initial first URL
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});

//AXIOS 
// remove minor pain point of fetch
// dont need to parse json (response data as js obj)
// dont need to throw error status (.catch will run if status code != 200)
// to use it --> add this before current script --> <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
axios
	.get("https://swapi.co/api/planets/")
	.then(function(res) {
		console.log(res.data); // return data as js obj
	})	
	.catch(function(err) { 
		console.log(err) 
	})

// ********************************
// CHAINING REQUESTS USING AXIOS
// ********************************
const fetchNextPlanetsaxios = (url = 'https://swapi.co/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanetsaxios = ({ data }) => { // response.data
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanetsaxios()
	.then(printPlanetsaxios)
	.then(fetchNextPlanetsaxios)
	.then(printPlanetsaxios)
	.then(fetchNextPlanetsaxios)
	.then(printPlanetsaxios)
	.catch((err) => {
		console.log('ERROR!!', err);
	});


////////////////////
//Async and Await //
////////////////////
//see example async js with promise
function getData() {
	const data = axios.get("https://swapi.co/api/planets/")
					.then(function(resoldata) {
						console.log(resoldata)
					}); //this will run response 2nd because need to waiting for promise result
	//this code run first because no need to waiting for result
	console.log(data); //Promise {<pending>}
}

//Async
//return function as a promise 
//working like promise but dont need to return res and rej func 
//just return value(for resolved) and return error(for rejected)

//for resolved value 
//normal promise --> return resolve(value)    ..(resolve name is depend on your promise func)
//async --> return value

//for rejected value
//normal promise --> return reject(value)
//async --> return throw "blablabla"

//let see example

//ex1
//normal func
function normalHello() {
	console.log("hello")
}
normalHello() // display hello

//async
async function aHello() {
	console.log("hello async");
}
aHello() // return a promise ()
aHello().then(function(resolve) {
	console.log(resolve); //display "hello async"
})

//ex2
//normal
function add(x,y) {
	if ( typeof x !== "number" || typeof y !== "number" ) {
		throw "input must be a number" ; // in console will error with this message
	}
	else {
		return (x+y);
	}
}
//normal promise 
function addp(x,y) {
	return new Promise(function(resolve,reject) {
		if ( typeof x !== "number" || typeof y !== "number" ) {
			reject("input must be a number") ; // return as a promise with rejected 
		}
		else {
			resolve(x+y); // return promise with resolveed 
		}
	})
}
addp("sdf",1)
	.then(function(val) {
		console.log(`Promise resolve with: ${val}`)
	})
	.catch(function(err) {
		console.log(`Promise rejected with: ${err}`) // Promise rejected with: input must be a number
		return err
	}) 

//async
async function adda(x,y) {
	if ( typeof x !== "number" || typeof y !== "number" ) {
		throw "input must be a number" ; // return as a promise with rejected 
	}
	else {
		return (x+y); // return promise with resolveed 
	}
}
adda('df','sdf')
	.then(function(val) {
		console.log(`Promise resolve with: ${val}`)
	})
	.catch(function(err) {
		console.log(`Promise rejected with: ${err}`) // Promise rejected with: input must be a number
	})

//Await 
//js will not move on to next line untill a promise return resolve or reject  
//so we dont need to write .then and callback
//let see example

async function getres() {
	const res = await axios.get("blablablaURL");
	console.log(res.data);
}
getres();

//But! if promise rejected not catch
//bro just .catch
getres().catch((err) => {
	console.log("in catch !!!");
})

//but we have another option (try and catch (like try and error in python ?))
async function getrest() {
	try {
		const res = await axios.get("blablablaURL");
		console.log(res.data);
	}
	catch(err) {
		console.log("in catch!", err);
	}
}
//and just call function 
getrest();

//for multiple await
// let see with moveX example
// const btn = document.querySelector('button');
// async function animateRight(el, amt) {
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// 	await moveX(el, amt, 1000);
// }
// animateRight(btn, 100).catch((err) => {
// 	console.log('Hit the right edge! Now Moving left!');
// 	animateRight(btn, -100);
// });



//Sequence request
// wait for promise resolved and then run next line
async function get3PokemonSequential() {
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1'); //wating pending --> get resolve to run next line
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}
//Pararell request
//run both of three imidietly (with promise pending status)
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

//let see another demon
// *******************************************
// A better demonstration of the difference...
// *******************************************
function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}

// IN SEQUENCE
async function lightShow() {
	await changeBodyColor('teal', 1000);
	await changeBodyColor('pink', 1000);
	await changeBodyColor('indigo', 1000);
	await changeBodyColor('violet', 1000);
}
// IN PARALLEL...
// Everything is "sent off" at the same time
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('indigo', 1000);
// 	const p4 = changeBodyColor('violet', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

lightShow();

// PARALLEL REQUESTS!
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	//can await with all promise in one line 
	const results = await Promise.all([ prom1, prom2, prom3 ]); 
	printPokemon(results);
}

function printPokemon(results) {
	for (let pokemon of results) {
		console.log(pokemon.data.name);
	}
}
get3Pokemon();


//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function() {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function() {
	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums_pro = [ 6, 7, 8, 9 ];
nums_pro.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"

///////////////////////
// OOP in javascript //
///////////////////////

//example for factory function (but not common to use)
//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"



// This is a Constructor Function (method is in prototype , not in own obj)
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined (because "this" refer to global scope(window))
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();
// color1.hex === color2.hex --> true (because refer to prototype , not in own object)


///for more compact we use >>>>>>>> class !!!!

// class Color {
// 	constructor(r, g, b, name) {
// 		console.log("Inside contructor");
// 		console.log(r, g, b);
// 		this.r = r;
// 		this.g = g;
// 		this.b = b;
// 		this.name = name;
// 	}
// 	greet() { 
// 		return `Hello from ${this.name}`
// 	}
// 	rgb() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	}
// 	//same with hex()
// }
// const c1  = new Color(255, 34, 34, "mycolor");

//full option
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		this.calcHSL(); // this h s and l 
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
	}
	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}
const red = new Color(255, 67, 89, 'tomato');
red.hsl();
red.opposite();
red.rgba(0.3);
const white = new Color(255, 255, 255, 'white');



//Extend  class

class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
}

class Dog extends Pet { 
	bark() {
		return "Barkkkkkk";
	}
}
class Cat extends Pet { 
	constructor(name, age , live) { // for addon constructor
		super(name, age) ; //this refer to Pet contructor
		this.live = live ;
	}
	meow() {
		return "meaowwwwww";
	}
}
