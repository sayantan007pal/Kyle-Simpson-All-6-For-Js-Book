/**
 * Phase 1
 * Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You’ll also buy accessories
for each phone as long as your purchase amount is below
your mental spending threshold.
 */

const { random } = require("lodash")

// const purchasePhoneAndAccessories = (totalAmount) => {
//     let mentalThressholdForPhone= Math.random(21, 56, 2)
//     let mentalThressholdForAccessories = Math.random(11 , 15, 2)
//     let count = 0;
//     while(true){
//         if(totalAmount< (mentalThressholdForPhone + mentalThressholdForAccessories)){
//             count+=1
//             console.log(`the remaining amount is  ${totalAmount.toFixed(2)} and final count is ${count}`);
//             break
//         }
//         else{
//               console.log(`for phone number ${count} is ${mentalThressholdForPhone.toFixed(2)}`);
//               console.log(  `for accessoceries number ${count} is ${mentalThressholdForAccessories.toFixed(2)}`);
//               totalAmount -= (mentalThressholdForPhone + mentalThressholdForAccessories)
//               count+=1
//         }
//     }

// }

// let myBankHas = purchasePhoneAndAccessories(500)
// console.log(myBankHas);



/**
 * Phase 2
 *After you’ve calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly formatted.
 */





// const TAX_AMOUNT = .2

// const purchasePhoneAndAccessories = (totalAmount) => {
//     let count = 0;
//     let mentalThressholdForPhone= Math.random(21, 56)
//     let mentalThressholdForAccessories = Math.random(11 , 15)

//     const purchaseedWithTax = (amount) => {
//         return amount  = amount + (amount * TAX_AMOUNT)
//     }
//     let mentalThressholdForPhoneWithTax = purchaseedWithTax(mentalThressholdForPhone)
//     let mentalThressholdForAccessoriesWithTax = purchaseedWithTax(mentalThressholdForAccessories)    
//     while(true){
//         if(totalAmount< (mentalThressholdForPhoneWithTax + mentalThressholdForAccessoriesWithTax)){
//             count+=1
//             console.log(`the remaining amount is  ${totalAmount.toFixed(2)} and final count is ${count}`);
//             break
//         }
//         else{
//               console.log(`for phone number ${count} is $${mentalThressholdForPhone.toFixed(2)} and after tax the phone's price is $${mentalThressholdForPhoneWithTax.toFixed(2)}`);
//               console.log(  `for accessoceries number ${count} is $${mentalThressholdForAccessories.toFixed(2)} and after tax the phone's price is $${mentalThressholdForAccessoriesWithTax.toFixed(2)}`);
//               totalAmount -= (mentalThressholdForPhoneWithTax + mentalThressholdForAccessoriesWithTax)
//               count+=1
//         }
//     }

// }

// let myBankHas = purchasePhoneAndAccessories(500)
// console.log(myBankHas);


/**
 * Phase 3
Finally, check the amount against your bank account balance to
see if you can afford it or not.
• You should set up some constants for the “tax rate,” “phone
price,” “accessory price,” and “spending threshold,” as well as a
variable for your “bank account balance.”
• You should define functions for calculating the tax and for formatting
the price with a “$” and rounding to two decimal
places.
• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in “Input” on page 6. You
may prompt the user for their bank account balance, for example.
Have fun and be creative!
 */




const TAX_AMOUNT = .2

const purchasePhoneAndAccessories = (totalAmount) => {
    let count = 0;
    let mentalThressholdForPhone= Math.random(21, 56)
    let mentalThressholdForAccessories = Math.random(11 , 15)

    const purchaseedWithTax = (amount) => {
        return amount  = amount + (amount * TAX_AMOUNT)
    }
    let mentalThressholdForPhoneWithTax = purchaseedWithTax(mentalThressholdForPhone)
    let mentalThressholdForAccessoriesWithTax = purchaseedWithTax(mentalThressholdForAccessories)    
    while(true){
        if(totalAmount< (mentalThressholdForPhoneWithTax + mentalThressholdForAccessoriesWithTax)){
            count+=1
            console.log(`the remaining amount is  ${totalAmount.toFixed(2)} and final count is ${count}`);
            break
        }
        else{
              console.log(`for phone number ${count} is $${mentalThressholdForPhone.toFixed(2)} and after tax the phone's price is $${mentalThressholdForPhoneWithTax.toFixed(2)}`);
              console.log(  `for accessoceries number ${count} is $${mentalThressholdForAccessories.toFixed(2)} and after tax the phone's price is $${mentalThressholdForAccessoriesWithTax.toFixed(2)}`);
              totalAmount -= (mentalThressholdForPhoneWithTax + mentalThressholdForAccessoriesWithTax)
              count+=1
        }
    }

}

let myBankHas = purchasePhoneAndAccessories(500)
console.log(myBankHas);
console.log("***********************************************");



//BOOK's VERSION OF SOLUTION

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;
var amount = 0;
function calculateTax(amount) {
return amount * TAX_RATE;
}
function formatAmount(amount) {
return "$" + amount.toFixed( 2 );
}
// keep buying phones while you still have money
while (amount < bank_balance) {
// buy a new phone!
amount = amount + PHONE_PRICE;
// can we afford the accessory?
if (amount < SPENDING_THRESHOLD) {
amount = amount + ACCESSORY_PRICE;
}
}
// don't forget to pay the government, too
amount = amount + calculateTax( amount );
console.log(
"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76
// can you actually afford this purchase?
if (amount > bank_balance) {
console.log(
"You can't afford this purchase. :("
);
}
// You can't afford this purchase. :(
