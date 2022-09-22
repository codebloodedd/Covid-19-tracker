const options = {
  method: 'GET',
  headers: {
    url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
    'X-RapidAPI-Key': '97fc79fbe7msh758788732e8c0bfp1de338jsnda26d866414b',
    'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
  }
};

function getData() {
  fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);

      // world cases

      var conformedCases = response.world_total.total_cases;
      var activeCases = response.world_total.active_cases;
      var recoveredCases = response.world_total.total_recovered;
      var deaths = response.world_total.total_deaths;
      document.querySelectorAll("h5")[0].innerHTML = conformedCases;
      document.querySelectorAll("h5")[1].innerHTML = activeCases;
      document.querySelectorAll("h5")[2].innerHTML = recoveredCases;
      document.querySelectorAll("h5")[3].innerHTML = deaths;

      // table

      for (var i = 0; i < 50; i++) {
        let path = document.querySelectorAll("tbody")[0];
				console.log(path);
        let tcontent = `<tr>
				    <th scope="row">${i+1}</th>
		   			<td>${response.countries_stat[i].country_name}</td>
		   			<td>${response.countries_stat[i].cases}</td>
		   			<td>${response.countries_stat[i].active_cases}</td>
		   			<td>${response.countries_stat[i].total_recovered}</td>
		   			<td>${response.countries_stat[i].deaths}</td>
		      </tr>`
					path.innerHTML += tcontent;

      }

			for (var i = 50; i < 100; i++) {
				let path = document.querySelectorAll("tbody")[1];
				console.log(path);
				let tcontent = `<tr>
						<th scope="row">${i+1}</th>
						<td>${response.countries_stat[i].country_name}</td>
						<td>${response.countries_stat[i].cases}</td>
						<td>${response.countries_stat[i].active_cases}</td>
						<td>${response.countries_stat[i].total_recovered}</td>
						<td>${response.countries_stat[i].deaths}</td>
					</tr>`
					path.innerHTML += tcontent;

			}

			for (var i = 100; i < 150; i++) {
				let path = document.querySelectorAll("tbody")[2];
				console.log(path);
				let tcontent = `<tr>
						<th scope="row">${i+1}</th>
						<td>${response.countries_stat[i].country_name}</td>
						<td>${response.countries_stat[i].cases}</td>
						<td>${response.countries_stat[i].active_cases}</td>
						<td>${response.countries_stat[i].total_recovered}</td>
						<td>${response.countries_stat[i].deaths}</td>
					</tr>`
					path.innerHTML += tcontent;

			}
      // const tableBody = document.querySelector("tbody");
      //
      // const {countries_stat, world_total } = response.json();
      // // const {countries_stat, world_total } = countries
      // console.log(countries_stat);
      // for (const country of countries_stat) {
      // 	const row = document.createElement("tr");
      //
      // 	for (const info of country){
      //
      // 		const cell = document.createElement("td");
      //
      // 		cell.textContent = info;
      // 		row.appendChild(cell);
      // 	}
      //
      // 	tableBody.appendChild(row);
      // }

      // table

      // let tableData = "";
      // response.map((values)=>{
      // 	tableData += `<tr>
      //     <td>${values.countries_stat.country_name}</td>
      //     <td>${values.countries_stat.cases}</td>
      //     <td>${values.countries_stat.active_cases}</td>
      //     <td>${values.countries_stat.total_recovered}</td>
      //     <td>${values.countries_stat.deaths}</td>
      //   </tr>`
      // 	document.getElementbyClass("tableContent").innerHTML=tableData;
      // })
      // url = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api'

      // async function tableData(table) {
      // 	const tableBody = table.querySelector("tbody");
      // 	const response = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options);
      // 	const {countries_stat, world_total } = await response.json();
      // 	for ()
      // 	for (const country of countries_stat) {
      // 		const row = document.createElement("tr");
      //
      // 		for (const info of country){
      //
      // 			const cell = document.createElement("td");
      //
      // 			cell.textContent = info;
      // 			row.appendChild(cell);
      // 		}
      //
      // 		tableBody.appendChild(row);
      // 	}
      // }

      // tableData(document.querySelector('table'));
      // graph
    })
    .catch(err => console.error(err));
}
  console.log(document.querySelectorAll("table")[0].className);

function myFunction(){
  var toggle = document.querySelectorAll("input")[0];

  var table = document.querySelectorAll("table");

  if (toggle.checked == true){
    for (var i = 0;i<3;i++){
      table[i].className = "table table-hover container table-dark"
    }
  }
  else{
    for (var i = 0;i<3;i++){
      table[i].className = "table table-hover container"
    }
  }
  }


let myData = getData();
console.log(myData);
