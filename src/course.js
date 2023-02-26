let show_palindrome = true;
let show_prime = true;
let show_revers = true;
let show_yay = true;

const to_palindrom_code = document.getElementById("to_palindrom_code");
const to_prime_code = document.getElementById("to_prime_code");
const to_reverse_code = document.getElementById("to_reverse_code");
const to_yay_code = document.getElementById("to_yay_code");

const palidrom_code = document.createElement("p")
const prime_code = document.createElement("p")
const reverse_code = document.createElement("p")
const yay_code = document.createElement("p")

const course = document.getElementById("courses").addEventListener("scroll", ()=>{
  console.log("alert");
})

to_palindrom_code.addEventListener("click", () => {
  const palindrom = document.getElementById("palindrom")
palidrom_code.innerHTML = `

const palidrom = (string) => {<br>
      if (string.length == 1) return true;<br>
      if (string.length == 2) return string[0] == string[1];<br>
      if (string[0] === string.slice(-1)) return palidrom(string.slice(1,-1)) <br>
      return false\n
  }
`;


if(show_palindrome) {
  palindrom.appendChild(palidrom_code)
  show_palindrome = false
}

})

to_prime_code.addEventListener("click", () => {
  const prime = document.getElementById("prime")
  prime.classList.add("animation")
prime_code.innerHTML = `

const  isPrime = (age) => {<br>
      if (age <= 1) return false;<br>
      if (age == 2) return true;<br>
    
      for (let i = 2; i < age ; i++) {<br>
        if (age % i == 0) {<br>
          return false;<br>
        }<br>
      }<br>
      return true;<br>
    }<br>
  }<br>
`;



if(show_prime) {
  prime.appendChild(prime_code)
  show_prime = false
}

})


to_reverse_code.addEventListener("click", () => {
  const reverse = document.getElementById("reverse")
reverse_code.innerHTML = `

function reverse(str) {<br>

    let newString = [];<br>
    for (let i = str.length - 1; i >= 0; i--) {<br>
        newString.push(str[i]);<br>
    }<br>
    return newString;<br>
}<br>
const  reverseString  = (string) => {<br>
    const special = {}<br>
    const numbers = []<br>
    for (let i = 0 ; i < string.length; i++){<br>
        if (string[i].match(/[0-9]/i)) numbers.push(string[i])<br>
        else special[i] = string[i]<br>
    }<br>
    const reversed = reverse(numbers)<br>
    for (key in special){<br>
        console.log(key,special[key]);<br>
        reversed.splice(key,0,special[key])<br>
    }<br>
    const join = reversed.join("")<br>
    return join.toString();<br>
}<br>
`;



if(show_revers) {
  reverse.appendChild(reverse_code)
  show_revers = false
}

})




to_yay_code.addEventListener("click", () => {
  const yay = document.getElementById("yay")
yay_code.innerHTML = `

// function consonant(string) { <br>
//   let con = string.match(/^([^aeiou]+)[aeiou]/i);<br>
//   if (!con)<br>
//     return string + "ay";<br>

//   return string.substring(con[1].length) + con[1] + "ay"<br>
// }<br>
`;



if(show_yay) {
  yay.appendChild(yay_code)
  show_yay = false
}

})


let number = prompt("enter 10 numbers")
const input = []

let i = 0;
if(number.length < 10) {
  number = prompt("enter 10 numbers")
}
while (i < number.length){
    
    if (isNaN(number[i])){
        number = prompt("enter 10 numbers")
        i = 0;
    }
    else {
        input.push(number[i]);
    }
    i++;
}
const merge = (left, right) => {
    let output = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        output.push(left.shift());
      } else {
        output.push(right.shift());
      }
    }
    return [...output, ...left, ...right];
  };
 const  mergeAndSort = (number) => {
    if (number.length <= 1) return number;
    let mid = Math.floor(number.length / 2);
    let left = mergeAndSort(number.slice(0,mid));
    let right = mergeAndSort(number.slice(mid));
    return merge(left, right)
}

console.log(mergeAndSort(input));

const palidrom = (string) => {
    
    if (string.length == 1) return true;
    if (string.length == 2) return string[0] == string[1];
    if (string[0] === string.slice(-1)) return palidrom(string.slice(1,-1)) 
    return false
}

 const palindromAnswer = () => {
  const string = document.getElementById("pal-input").value;
  const palAnswer = document.getElementById("pal_answer")
  const answer = palidrom(string)
  palAnswer.innerHTML = "your output is :" + answer

  }

const  isPrime = (age) => {
    if (age <= 1) return false;
    if (age == 2) return true;
  
    for (let i = 2; i < age ; i++) {
      if (age % i == 0) {
        return false;
      }
    }
    return true;
  }

  const primeAnswer = () => {
    const primeInput = document.getElementById("prime-input").value;
    const prime = document.getElementById("prime-answer");
    const answer = isPrime(primeInput)
    prime.innerHTML = "your output is :" + answer;  
  }

// console.log(isPrime(13));

function reverse(str) {

    let newString = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newString.push(str[i]);
    }
    return newString;
}
const  reverseString  = (string) => {
    const special = {}
    const numbers = []
    for (let i = 0 ; i < string.length; i++){
        if (string[i].match(/[0-9]/i)) numbers.push(string[i])
        else special[i] = string[i]
    }
    const reversed = reverse(numbers)
    for (key in special){
        console.log(key,special[key]);
        reversed.splice(key,0,special[key])
    }
    const join = reversed.join("")
    return join.toString();
}

const reverseAnswer = () => {
    const revInput = document.getElementById("rev-input").value;
    const revOutput = document.getElementById("rev-answer");
    const answer = reverseString(revInput);
    revOutput.innerHTML = "your output is :" + answer

}

console.log(reverseString("alin31ed"));

function consonant(string) {
  let con = string.match(/^([^aeiou]+)[aeiou]/i);
  if (!con)
    return string + "ay";

  return string.substring(con[1].length) + con[1] + "ay"
}

const yayAnswer = () => {
  const yayInput = document.getElementById("yay-input").value;
  const yayAnswer = document.getElementById("yay-answer");
  const anser = consonant(yayInput)
  yayAnswer.innerHTML = "your output is :" + anser
}


const getIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json()
   return data.ip
}

fetch("https://api.ipify.org?format=json")
.then((response) => response.json())
.then((data) =>{
    let sum = 0
    const ip = data.ip
    const ip_array = ip.split(".")
    console.log(ip_array);
    for (let element of ip_array){
        if(parseInt(element) % 2 === 0 ) {
           sum = sum + parseInt(element) 
        }
    }
    console.log(sum);
}
     
);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    const myLocation = document.getElementById("location");
    const loc = document.createElement("h3");
    loc.innerHTML = `
    my longitude is : ${position.coords.longitude} <br>
    my latitude is : ${position.coords.latitude} <br>
    
    `
    loc.className = "location"
    myLocation.appendChild(loc)
  }
  getLocation()

  const boost = document.getElementsByClassName("boost")[0].addEventListener("click", () => {
    window.location.href = "#head"
  })


