function roll(roll, amount) {
    const die = parseInt(roll.slice(roll.indexOf('d') + 1, roll.length));
    let rolls = [Math.floor(Math.random() * die) + 1];
    if (Number.isInteger(parseInt(amount))) {
        for (i = 1, sum = rolls[0]; i < amount; i++) {
            let val = Math.floor(Math.random() * die) + 1;
            rolls.push(val);
            sum += val;
        }
        document.getElementById("output").innerHTML =
            `Sum: ${sum}/${amount * die}<br>Avg: ${(sum / rolls.length).toFixed(2)}/${die}<br><br>Values: ${rolls}`;
    }
    else {
        document.getElementById("output").innerHTML = `Roll: ${rolls}/${die}`;
    }
}
document.getElementById("d100").onclick = function() {roll("d100", document.getElementById("amount").value)};
document.getElementById("d20").onclick = function() {roll("d20", document.getElementById("amount").value)};
document.getElementById("d12").onclick = function() {roll("d12", document.getElementById("amount").value)};
document.getElementById("d10").onclick = function() {roll("d10", document.getElementById("amount").value)};
document.getElementById("d8").onclick = function() {roll("d8", document.getElementById("amount").value)};
document.getElementById("d6").onclick = function() {roll("d6", document.getElementById("amount").value)};
document.getElementById("d4").onclick = function() {roll("d4", document.getElementById("amount").value)};
document.getElementById("d2").onclick = function() {roll("d2", document.getElementById("amount").value)};
document.getElementById("dN").onclick = function() {roll(prompt("Enter roll"), document.getElementById("amount").value)};
