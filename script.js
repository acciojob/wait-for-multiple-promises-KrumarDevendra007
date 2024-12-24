//your JS code here. If required.

//funtion for time between 1 to 3

const createPromise = (name) => {

	const time = Math.random() * 2+1;
	return new Promise((resolve) => {
		setTimeout(() => resolve({name, time:time.ToFixed(3)}), time*1000);
	});
}

// array of three promises
const promises = [
	createPromise("Promise 1"),
	createPromise("Promise 2"),
	createPromise("Promise 3")
];

// Add "Loading..." row initially
const output = document.getElementById("output");
const loding = document.createElement("tr");
loding.innerHTML = `
      <td>${Loading...}</td>
`;
output.appendChild(loding);

// Use Promise.all to wait for all promises to resolve
const startTime = performance.now();
promise.all(promises).then((results) => {
	// Calculate total time taken
	const totalTime = (performance.now() - startTime)/1000;

	// Remove the "Loading..." row
	document.getElementById("loading-row").remove();

	// Add rows for each promise
	results.forEach((results) => {
		const row = document.createElement("tr");
		row.innerHTML = `
		   <td>${result.name}</td>
		   <td>${result.time}</td>
		`;
		output.appendChild(row);	

		 // Add row for the total time
		const totalRow = document.createElement("");
		totalRow.innerHTML = `
		<td>Total</td>
		<td>${totalTime.toFixed(3)} s</td>
		`;
		output.appendChild(totalRow);
	})
})

