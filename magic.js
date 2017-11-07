
function temperature(F) {
	return (F-32) / 1.8;
}
//console.log(temperature(32))

for (i = 20; i <= 120; i += 5) {
  console.log("Fahreinheight :" + i + " " + "Celcius :" + temperature(i));
  var table = document.getElementById("Table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = i;
  cell2.innerHTML = temperature(i);
}
