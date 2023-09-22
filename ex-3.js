//Exercise #3: Debugging (Type Conversion)

let numberA = 100; // เปลี่ยนจาก const เป็น let เพื่อให้เปลี่ยนค่าได้
const numberB = "20";

numberA = 10;

//ของเก่า console.log(`Sum: ${numberA + numberB}`);
console.log(`Sum: ${numberA + parseInt(numberB)}`);

// ใช้ parseInt เพื่อแปลง numberB เป็นตัวเลข
