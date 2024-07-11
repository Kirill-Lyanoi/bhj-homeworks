let dead = document.getElementById("dead").textContent;
let lost = document.getElementById("lost").textContent;
for (let index = 1; index <= 9; index++) {
	function getHole (index) {
		let holeClick = document.getElementById(`hole${index}`);
		return holeClick;
	}
	let hole = getHole (index);
	hole.onclick = function() {
		if (hole.className.includes("hole_has-mole") === true) {
            ++dead;
		} else {
            ++lost;
		}
		if (dead === 10) {
			alert ("Вы победили!");
            dead = 0
            lost = 0
		} else if (lost === 5) {
			alert ("Вы проиграли");
            dead = 0
            lost = 0
		  }
            document.getElementById("dead").textContent = dead;
            document.getElementById("lost").textContent = lost;
	}
}