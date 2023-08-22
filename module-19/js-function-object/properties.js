var shoppingCart ={
    books : 3,
    sunglass : 1,
    kryboard : 5,
    mouse : 1,
    pen : 25
}

// whwn u know the specific property name, use dot notation to get the property value 
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['pen'];
var propertyName = 'mouse';
var property2Name = 'books';

var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

var properties =Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);


// set property values 

console.log(shoppingCart);
//   1.
shoppingCart.mouse =15;
console.log(shoppingCart);
    
    //  2
    shoppingCart['mouse'] = 30;
    console.log(shoppingCart);

    //   3 
    shoppingCart[propertyName] = 90;
    console.log(shoppingCart);