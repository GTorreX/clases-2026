function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const Price = 3500
const discountPercentage = 25
const finalPrice= calculateDiscountedPrice(Price, discountPercentage)

console.log('Price: $' + Price)
console.log('discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)
console.log(typeof calculateDiscountedPrice)


//function sum (a, b){
    //return a + b


    let total = 0

    function sumwith (a){
        total += a
        return total
    }
console.log(total)