var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;
// console.log(penCount);

var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);

console.log(shoppingCart[mouse]);