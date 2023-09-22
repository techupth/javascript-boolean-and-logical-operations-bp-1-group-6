// Exercise #1: Event Conditions

// Start coding here
let isOver18 = 18;
let hasCriminalBlacklist = false;
let isThai = "Thai";

let isAllow = (isOver18) && ((!hasCriminalBlacklist) || (!isThai));

console.log(isAllow); //true