// for(num=0;num<=100;num++){
//     console.log("number",num);
// }

// for(num=0;num<=100;num++){
//     if(num%2===0)
//     console.log("number",num);
// }

// for(num=0;num<=100;num++){
//     if(num%2!==0)
//     console.log("number",num);
// }

// let gamenumber=25;

// let userNum = prompt("Guess the correct number :");
// console.log(userNum);

// while(userNum != gamenumber){
//     userNum = prompt(" You guessed  the wrong number :");
// }

// console.log("Correct");

// let class_marks=[44,55,67,23,44,99,1];

//find avg of all marks in this 

// let sum=0;
//  for(let val of class_marks){
//     sum = sum + val;
//  }

// console.log(`avg marks of the class is :${sum/class_marks.length}`);

// let faang=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // console.log(faang)
// let value =faang.shift();
// console.log(faang);
// faang.splice(1,1,"Ola");
// faang.push("Amazon")

// function myFunction(){
//     console.log("this is my function")
//     console.log("this is my function too")
// }

// myFunction();

// // use this function in a loop
// for(let i=0;i<100;i++){
//     myFunction();
// }

// Arrow functions

// const mul=(x,y)=>{
//     console.log(x*y);
// }

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count; 
// }


// const CountVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count; 
// }

// let nums = [1,2,3,4,5];

// nums.push(6)
// nums.splice(0,1,0);
// nums.unshift(1);
// nums.forEach(num => {
//     console.log(num**2);
// });

// THIS CAN ALSO BE DONE BY THIS METHOD

// let numbers=[1,2,3,4,5];

// let square = (num) => {
//     console.log(num**2)
// }

// numbers.forEach(square);

// // Using filter method in arrays
// let arr=[1,2,3,4,5,6,7,8,9,10];

// let evenArr = arr.filter((num) => {
//     return num%2===0;
// });

// console.log(evenArr)

// let oddArr = arr.filter((num) => {
//     return num%2!==0;
// });

// console.log(oddArr)

// let greaterthanArr = arr.filter((num) => {
//     return num>5;
// });

// console.log(greaterthanArr)

//reduce method in arrays to find out the largest number

// let arr1=[10,20,30,40,50,60,70,80,90,100];

// const output = arr1.reduce((res,cur) => {
//     return res > cur ? res:cur;
// });

// console.log(output)

// Q1
// let marks=[15,22,36,43,58,65,97,99,90,10];

// let toppers = marks.filter((val) => {
//     return val>90;
// });

// console.log(toppers);

