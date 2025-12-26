const TAX_RATE = .04

const amountAfterTax = (amt) => {
    amt = amt + (amt * TAX_RATE)
    return amt;
    
}
const amount =  amountAfterTax(50)
console.log(amount.toFixed(2)); //here toFixed(2) is used to round off the value to 2 decimal places

