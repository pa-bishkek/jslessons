var body = document.body;
console.dir(body);
console.log("fec:", body.firstElementChild);
console.log("lec:", body.lastElementChild);
//
var h1 = document.getElementById("header");
console.dir(h1);
console.log("parent:", h1.parentNode);
//
var p = document.querySelector("#paragraph");
console.log("p:", p);
var typo = document.querySelectorAll(".typo");
console.log("typo:", typo);
//
var typo2 = document.querySelectorAll("div > .typo");
console.log("typo2:", typo2);
//
var div = document.querySelector("div");
//console.log("div.innerHTML:", div.innerHTML);
//console.log("div.outerHTML:", div.outerHTML);
div.innerHTML = "<h3>I am h3</h3>";
//
var p3 = document.querySelector("body > p");
p3.innerText = "another text";
