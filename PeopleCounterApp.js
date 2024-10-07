let count = 0; // Initialize the counter
let countEl = document.getElementById("count"); // Get the element where the count will be displayed
let saveEl = document.getElementById("save-el"); // Get the element where the save

console.log(countEl); // Just for debugging, to check if countEl is properly selected

function increment() {
    count += 1; // Increment the count
    countEl.textContent = count; // Update the displayed count
}

function save() {
    let str = count + ' - '
    saveEl.textContent += str // Save the selected count value in the selected text field
    count = 0
    countEl.textContent = count; // Reset the displayed count to 0
}



// let count = 0;
// let countEl = document.getElementById('count');
// let saveEl = document.getElementById('save-el');

// function increment () {
//     count++;
//     countEl.textContent = count;
// }

// function save () {
//     saveEl.textContent += count +' - ';
//     count = 0;
//     countEl.textContent = count;
// }
