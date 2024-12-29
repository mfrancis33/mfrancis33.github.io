const originalLetters = [
	["S","L","T","P","E","U"],
	["S","L","C","R","E","A"],
	["V","G","T","N","E","I"],
	["D","T","N","K","O","U"],
	["N","V","D","Z","A","E"],
	["L","T","B","Y","I","A"],
	["M","H","R","S","A","O"],
	["N","S","D","W","E","O"],
	["M","B","Q","J","A","O"],
	["H","E","F","Y","I","E"],
	["H","P","S","N","I","E"],
	["G","L","Y","K","U","E"],
	["C","D","P","M","E","A"],
	["T","A","C","I","A","O"],
	["G","W","R","L","I","U"],
	["R","B","F","X","I","O"]
];

function shuffle() {
	const tds = document.querySelectorAll("td");
	const shuffled = [];
	const unshuffled = [...originalLetters];
	while (unshuffled.length > 0) {
		console.log("Yay");
		shuffled.push(unshuffled.splice(Math.floor(Math.random() * unshuffled.length), 1)[0]);
	}
	for (let i = 0; i < tds.length; i++) {
		tds[i].innerText = shuffled[i][Math.floor(Math.random() * 6)];
	}
}
document.querySelector("button").onclick = (e) => {
	e.preventDefault();
	shuffle();
}