let saveElement =document.getElementById("saveElement")
let countElement = document.getElementById("countElement")

let count = 0

function increment() {
	count += 1
	countElement.textContent = count
}

function save () {
	let countString = count + " - "
	saveElement.textContent += countString
	countElement.textContent = 0
	count = 0
}