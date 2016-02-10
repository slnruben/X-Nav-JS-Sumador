function changer(id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function suma() {
	var operation= document.getElementById("op");
	var operands = operation.innerHTML.split("+");
	var result = parseInt(operands[0]) + parseInt(operands[1]);
	changer("res", "=" + result);
}

function changeNumbers() {
	var n1 = Math.floor((Math.random() * 100) + 1);
	var n2 = Math.floor((Math.random() * 100) + 1);
	var numbers = [n1, n2];
	changer("op", numbers.join("+"));
	changer("res", "");
}