//your JS code here. If required.

const table = document.getElementByClass("table");

Promise.all([
	new Promise((resolve, reject) => {
		 const row1 = table.insertRow(0);
		 const cell1 = table.insertCell(0);
		 const cell2 = table.insertCell(1);

		 cell1.innerHTML = "Loading..."
		 if(scucess){
			 ;
			 
		 }
		
	}),
	new Promish((resolve, reject) => {}),
	new Promise((resolve, reject) => {})
]);