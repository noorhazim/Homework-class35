'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
    "beer": 1.74,
    'chips': 0.99,
    'milk': 1.49,
    'nuts': 3.99,
    'beef': 5.55
};

function calculateTotalPrice(listOfItems) {
    let total = 0
    for (const value of Object.keys(listOfItems)) {
        total += parseFloat(listOfItems[value]);
    }
    return `Total: ${total} €`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
    console.log(calculateTotalPrice(cartForParty));
    // TODO replace this comment with your code
}

function test2() {
    console.log('\nTest 2: return correct output when passed cartForParty');
    // TODO replace this comment with your code
}

function test() {
    test1();
    test2();
}

test();