let mountains = [{"F_NAME":"FOUNTAIN SHELL","Score":99.67},{"F_NAME":"WABA GRILL","Score":99.67},{"F_NAME":"WHEALTHY RESTAURANT","Score":99},{"F_NAME":"JIMMY JOHN'S","Score":99},{"F_NAME":"ROSS DRESS FOR LESS #356","Score":98.75},{"F_NAME":"HOLLYWOOD GYM","Score":98.33},{"F_NAME":"JAPAN HOUSE LA 2ND FLOOR","Score":98},{"F_NAME":"SIMON'S DISCOUNT PHARMACY","Score":98},{"F_NAME":"AFC AT RALPHS#100","Score":97.78},{"F_NAME":"SEVEN DAY CHEVON","Score":97.67}]

$(document).ready(function(){
	$.ajax({
		url:'api/top_5_restaurant_table/'+emp_id+'/',
		type:'GET',
		dataType:'json',
		success:(data) => {
			var json_mth;
			var i;
			for(i = 0; i < data.length; i++)
			{
			 json_mth = JSON.parse(JSON.stringify(data[i]));
			}
			
		}
	});
});


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTable(table, mountains); // generate the table first
generateTableHead(table, data); // then the head