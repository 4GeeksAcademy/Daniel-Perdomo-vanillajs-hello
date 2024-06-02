/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  document.getElementById("excuse").innerHTML = excuse;

  let who = ["The dog", "My grandma", "The mailman", "My bird", "My wife"];
  let whoPart = who[randomNumber(who.length - 1)];

  let action = ["ate", "peed", "crushed", "broke"];
  let actionPart = action[randomNumber(action.length - 1)];

  let what = ["my homework", "my phone", "the car"];
  let whatPart = what[randomNumber(what.length - 1)];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "while playing the trombone",
  ];
  let whenPart = when[randomNumber(when.length - 1)];

  let phrase = `${whoPart} ${actionPart} ${whatPart} ${whenPart}`;
  document.getElementById("excuse").innerHTML = phrase;
};
