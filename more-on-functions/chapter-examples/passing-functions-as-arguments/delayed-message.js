function printMessage() {
    console.log("The future is now!");
}
function sayΧαιρε(){
    console.log("Χαίρετε πάντες");
}
console.log("Wait for it...");
setTimeout(printMessage, 7000);
setTimeout(sayΧαιρε, 4000);
setTimeout(function(){
    console.log("oogity boogity");
}, 2500)
// DOES NOT WORK:
// setTimeout(setTimeout(sayΧαιρε, 3000), 5000);
// setTimeout(printMessage, 5000);