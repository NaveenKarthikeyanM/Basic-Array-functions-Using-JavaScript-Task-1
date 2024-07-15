//Multiles of 3, 5, 3&5
let i;
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        document.write("FizzBuzz<br>");
        continue;
    }
    else if(i%3==0){
        document.write("Fizz<br>");
        continue;
    }
    else if(i%5==0){
        document.write("Buzz<br>");
        continue;
    }
    document.write(i+"<br>");
}

document.write("<br><br><br><br>")

//Palindrome
function palindrome(n){
    r=n.split("").reverse().join("");
    if(n==r){
        document.write("PALINDROME.");
    }
    else{
        document.write("Not a Palindrome.")
    }
}
palindrome("malayalam");


document.write("<br><br><br><br>")


//Largest Number
let arr=[20,30,70,10,50,40];
let arr1=arr.sort();
document.write(arr1[(arr1.length)-1]);


document.write("<br><br><br><br>")


//Character count of String
function occurences(str) {
    const count = {};
    for (let j = 0; j < str.length; j++) {
        const char = str[j];
        if (count[char]) {
            count[char]++;
        } 
        else {
            count[char] = 1;
        }
    }
    return count;
}
const str = "Hello";
console.log(occurences(str));





document.write("<br><br><br><br>")


//Factorial
function fact(a){
    let i,ans=1;
    for(i=1;i<=a;i++){
        ans=ans*i
    }
    document.write("Factorial of "+a+" is "+ans);
}
fact(5);



document.write("<br><br><br><br>")


//Celcius to Fahrenheit
function temperature(c){
    f=c*(9/5)+32;
    document.write(c+" degree celcius = "+f+" degree farenheit");
}
temperature(100);



document.write("<br><br><br><br>")


//Missing Number
let num=[0,1,2,3,4,6,7,8,9];
for(let k=0;k<num.length;k++){
    if(num[k]!=k){
        document.write("The missing number is "+k)
        break;
    }
}


document.write("<br><br><br><br>")