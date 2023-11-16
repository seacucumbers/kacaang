document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code here
    let qty = 1;
    document.getElementById("quantity").innerText = qty;

});

function plus() {
    qty = parseInt(document.getElementById("quantity").innerText) + 1;
    document.getElementById("quantity").innerText = qty;
}

function minus() {
    // Ensure qty doesn't go below 0
    qty = Math.max(0, parseInt(document.getElementById("quantity").innerText) - 1);
    document.getElementById("quantity").innerText = qty;
}

// function plus() {
//     qty = qty + 1;
//     document.getElementById("quantity").innerText = qty;
// }

// function minus() {
//     qty = qty - 1;
//     document.getElementById("quantity").innerText = qty;
// }