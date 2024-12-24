//your JS code here. If required.

// Add "Loading..." row initially
const output = document.getElementById("output");
// output.document.createElement("tr");
output.innerHTML = `
 <tr id="loding">
   <td callspan="2">Loading...</td>
 </tr>
`;

// overall start time
const overallStarttime = Date.now();
// Promis 1
Promise.all([
	new Promise((resolve) => {
		const startTiime = Date.now()
		setTimeOut(() => {
			const duration = Date.now-startTiime
			resolve({name:"Promise1", time:duration})
		}, 2000)
	}),

	// Promis 2
Promise.all([
	new Promise((resolve) => {
		const startTiime = Date.now()
		setTimeOut(() => {
			const duration = Date.now-startTiime
			resolve({name:"Promise2", time:duration})
		}, 1000)
	}),

	// Promis 3
Promise.all([
	new Promise((resolve) => {
		const startTiime = Date.now()
		setTimeOut(() => {
			const duration = Date.now-startTiime
			resolve({name:"Promise3", time:duration})
		}, 3000)
	})
]).then((results) => {
	const overallEndTime = Date.now()-overallStarttime
	console.log(overallEndTime)
	console.log(results)

	output.innerHTML = ``;
	results.forEach((result) => {
		output.innerHTML += `
		<tr>
		<td>${result.name}</td>
		<td>${result.time}</td>
		</tr>
		`
	});

	output.innerHTML = `
	<tr>
	<td><strong>Total</strong></td>
	<td>${(overallStarttime/1000).toFixed(3)}</td>
	</tr>
	`;	
}).catch((error) => {
	console.log(error)
})
      





