//part 1:coding questions
//1:Convert the string "123" to a number and add 7
let number=Number("123")
console.log(number+7)

//2:Check if the given variable is falsy and return "Invalid" if it is. 
function falsyCheck(){
let x=0
if(!x){
    return "invaild";
}
}
console.log(falsyCheck());

//3:Use for loop to print all numbers between 1 and 10, skipping even numbers using continue 
for(let i=1;i<=10;i++){
  if( i%2==0){
    continue
  }
    console.log({i})
}

//4:Create an array of numbers and return only the even numbers using filter method
let arr=[1,2,3,4,5]
let event_numbers=arr.filter((value)=>{
    return value%2==0
})
console.log({event_numbers})

//5:Use the spread operator to merge two arrays, then return the merged array
let arr2=[1,2,3]
let arr3=[4,5,6]
let mergedArray=[...arr2,...arr3]
console.log(mergedArray)

//6:Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
let day="wednesday";
switch(day){
    case"Sunday":
    console.log("1=sunday")
    break;
    case"monday":
    console.log("2=monday")
    break;
    case"tuesday":
    console.log("3=tuesday")
    break;
    case"wednesday":
    console.log("4=wedneday")
    break;
    case"thursday":
    console.log("5=thursday")
    break;
    case"friday":
    console.log("6=friday")
    break;
    case"saturday":
    console.log("7=saturday")
    break;
}

//7:Create an array of strings and return their lengths using map method
let array=["a", "ab", "abc"]
let result=array.map((value,index)=>{
    return value.length
})
console.log(result)

//8:Write a function that checks if a number is divisible by 3 and 5
let num=15;
if(num%3==0&num%5==0){
    console.log(`the number ${num} is divisibled by both`)
}

//9:Write a function using arrow syntax to return the square of a number
let squareNum=(num)=>{return(num*num)}
console.log(squareNum(5))

//10:Write a function that destructures an object to extract values and returns a formatted string
function extract(person={}){
    let{name='John', age=25}=person;
    return(`${name} is ${age} years old`);
}
console.log(extract())

//11:Write a function that accepts multiple parameters (two or more) and returns their sum

function sum(...nums){
    let result=0;
    for(let i=0;i<nums.length;i++){
        result+=nums[i]
    }
    return result;
}
console.log(sum(1,2,3,4,5))

//12:Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
function success(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("success")
        },3000)
    })
}
success().then(value =>{
    console.log(value)
})

//13:Write a function to find the largest number in an array
/* //wrong first thinking of question
   let largestNum=arr4.find((value)=>{
   return value>4;
 })
 console.log(largestNum)*/
 // second thinking
function largestNum(array){
    let largestvalue=array[0]
    for(let i=0;i<array.length;i++){
        if(largestvalue<array[i]){
            largestvalue=array[i]
        }
    }
    return largestvalue;
}
console.log(`the largest value in the array is ${largestNum([1,3,7,2,4])}`)
//thind way from i learnd it from(ai)
function largestNum2(arr){
    console.log(`the largest value in the array is ${Math.max(...arr)}`)
}
largestNum2([1,2,3,4,5,6,7,8])

//14:Write a function that takes an object and returns an array containing only its keys
function transformation(obj){
    return (Object.keys(obj))
}
console.log(transformation({name: "John", age: 30}))

//15:Write a function that splits a string into an array of words based on spaces
function spliting(string){
    return(string.split(" "))
}
console.log(spliting("The quick brown fox"))

//-------------------------------------------------------------------------------------------

//Part 2: Essay Questions

/*
 1:What is the difference between forEach and for...of? When would you use each?
 the foreach is a method of array and we use it with arrays only and we can't use break&continue with foreach,
 but the for of is a loop such as(for)and we can use break&continue with for of
*/

/*
  2:What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples?
  hoisting:
  for example:
  <----with var---->
  console.log(x) //undefined bacause{var make the var x in the top of the code but it's not assigment}
  var x=10 
  <----with let&const---->
  console.log(x) //refrence error because it's in the TDZ
  let x=10 
*/

/*
  3:What are the main differences between == and ===?
  ==:do a comparison between values only
  ===:do a comparison between values and types
  for example:
  5=="5" <true> 
  5==="5" <false>
*/

/*
  4:Explain how try-catch works and why it is important in async operations?
  try and catch are used with (promises,async&await) the try is to execute the code and And if an error occurs the compiler go to catch
  to catch the error and show the message error in terminal 
*/

/*
  5:What’s the difference between type conversion and coercion? Provide examples of each?
  type conversion:when we use Number to convert from string to number 
  coercion:we make the compiler acts 
  for example:
  console.log(Number("10")+10)<---the output is 20--->
  console.log("10"+10)<---the output is 1010--->
*/