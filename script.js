const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
	let x = document.querySelectorAll(".price");
	let ttl = 0;
	for(let i = 0;i<x.length;i++){
		ttl += parseInt(x[i].textContent);
	}
	let tbl = document.querySelector('table');
	let tr = document.createElement("tr");
	tr.innerHTML = `
 <td>Total Price</td>
 <td>${ttl}</td>`
	tbl.appendChild(tr);
  };

getSumBtn.addEventListener("click", getSum);

