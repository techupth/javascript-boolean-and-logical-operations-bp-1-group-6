// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true; //John มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
let isWeekday = true; //John ไปซื้อของวันศุกร์
let hasBoughtProductFromITCategory = false; //John ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
let hasAttendedDiscountEvent = true; //John เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
let isPlatinum = false; //John เป็น Member ระดับ Gold

let hasPromotion = (
    (lastMonthPaidMoreThan4000 
    && isWeekday 
    && (!hasBoughtProductFromITCategory)
    && (!hasAttendedDiscountEvent)
    ) || isPlatinum   
    );

console.log(hasPromotion); //false เพราะ John เป็น Member ระดับ Gold ไม่ผ่านเงื่อนไขข้อที่ 2
