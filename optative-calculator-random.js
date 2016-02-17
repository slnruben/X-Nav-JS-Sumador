function changer(id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = element.innerHTML + newValue;
}

function suma(num) {
	var operation = document.getElementById("op" + num);
	var html = operation.innerHTML;
	if (html.indexOf("=") === -1) {
		var str = html.substr(html.indexOf(" ") + 1);
		var operands = str.split("+");
		var result = parseInt(operands[0]) + parseInt(operands[1]);
		changer("op" + num, "=" + result);
	}
}

function newOperation() {
	var div = document.getElementById("operations");
	var numOps = div.children.length + 1;
	var p = document.createElement("p");
	p.setAttribute("id", "op" + numOps);	
	div.appendChild(p);
	var span = document.createElement("span");

	p = document.getElementById("add");
	var a = document.createElement("a");
	a.setAttribute("href", "javascript:suma(" + numOps + ")");
	var text = document.createTextNode(numOps + " ");
	a.appendChild(text);
	p.appendChild(a);

	var n1 = Math.floor((Math.random() * 100) + 1);
	var n2 = Math.floor((Math.random() * 100) + 1);
	var numbers = [n1, n2];
	changer("op" + numOps, "op" + numOps + ": " + numbers.join("+"));
	changer("res", "");
}