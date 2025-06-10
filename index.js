let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Straberry Milkshake';

function addBurger() {
    let newBurger = 'Flatburger';
    burgers.push(newBurger);
}

if(true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

addBurger();
console.log(burgers);

changeFeaturedDrink();
console.log(featuredDrink);