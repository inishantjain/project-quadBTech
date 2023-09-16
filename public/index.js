const tableBody = document.getElementById("table-body");
const timer = document.getElementById("timer");
populateTableBody();

setInterval(() => {
  const remainingTime = 59 - (Math.round(Date.now() / 1000) % 60);
  timer.innerText = remainingTime;
  if (remainingTime === 0) populateTableBody();
}, 1000);

async function populateTableBody() {
  const data = await fetchData();
  // console.log(data);
  tableBody.innerHTML = "";
  data.forEach((obj) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${obj?.id}</td>
              <td>${obj?.name}</td>
              <td>₹${obj?.last.toLocaleString()}</td>
              <td>₹${obj?.buy.toLocaleString()} / ₹${obj?.sell.toLocaleString()}</td>
              <td>${obj?.volume.toLocaleString()}</td>
              <td>${obj?.base_unit.toUpperCase()}</td>
    `;
    tableBody.appendChild(row);
  });
}

async function fetchData() {
  const res = await fetch("/api/v1/getTicker");
  const data = await res.json();
  return data;
}
