// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasCriminalBlacklist = true;
let isThai = true;

let isAllow = isOver18 || !hasCriminalBlacklist || !isThai;

console.log(isAllow);

//true เพราะเงื่อนไขขอแค่ผู้เข้าร่วมงานต้องมีอายุตั้งแต่ 18 ปีขึ้นไป