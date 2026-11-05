
// Step 1: Select HTML elements

let count = document.getElementById("count");

let increase = document.getElementById("increase");

let decrease = document.getElementById("decrease");

let reset = document.getElementById("reset");


// Step 2: Create a counter variable

let number = 0;


// Step 3: Increase button

increase.addEventListener("click", function() {

    number++;

    count.textContent = number;

});


// Step 4: Decrease button

decrease.addEventListener("click", function() {

    number--;

    count.textContent = number;

});


// Step 5: Reset button

reset.addEventListener("click", function() {

    number = 0;

    count.textContent = number;

});
