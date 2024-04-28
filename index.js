
let countElement = document.getElementById("countElement")

console.log(countElement)

let count = 0

function increment() {
	count = count + 1;
	countElement.innerText = count;

}