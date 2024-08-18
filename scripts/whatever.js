function randInt(low, max) {
    return Math.floor(Math.random()*(max-low+1)) + low; 
}

function test() {
    // alert("hi"); 
    console.log("Here is a message");

    //get ids by name (singular because id is ususally only one element)
    let div2 = document.getElementById("canvas"); 

    //get classes by name 
    let div1 = document.getElementsByClassName("playground")[0]; 
    
    //create a new element on the document
    let newThing = document.createElement('p');

    //Change the inner text 
    newThing.innerText = "Wow a new paragraph!"; 

    //can set the class and other attributes (id, img src, etc.) 
    newThing.setAttribute("class", "funnytext"); 

    let randColour = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;

    newThing.style = `color: ${randColour};`;

    //add to the div
    div1.appendChild(newThing);
}

var colors = ["red", "green", "blue", "yellow"]; 


// create a pop-up on the page
// alert("whatever");

//semicolon in js is not necessary
// equivalent to print in other languages
// console.log("Here is a message");


// 3 different ways to make variables in js
let x = 5; // block scope variable
var y = 6; //function scoped variable
const z = 10; //means the variable is final 
//you should use let if you want the variable to be auto
//cleaned up later, and var if you want to keep it for the futuer
//for instance, in for loops, use let


