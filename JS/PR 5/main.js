var RIVERS = [
    {назва: "Дніпро", впадає: "Чорне море", довжина: 2201},
    {назва: "Дністер", впадає: "Чорне море", довжина: 1362},
    {назва: "Південний Буг", впадає: "Чорне море", довжина: 806},
    {назва: "Сіверський Донець", впадає: "Дон", довжина: 1053},
    {назва: "Горинь", впадає: "Прип'ять", довжина: 659}
    ];
    
function buildTable(data) {
    let table = document.createElement("table");

    let thead = document.createElement("thead");
    let th = document.createElement("th");
    th.innerText = "Назва";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerText = "Впадає";
    thead.appendChild(th);
    th = document.createElement("th");
    th.innerText = "Довжина";
    thead.appendChild(th);

    let tbody = document.createElement("tbody");
    for(let i = 0; i < RIVERS.length; i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = RIVERS[i].назва;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerText = RIVERS[i].впадає;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerText = RIVERS[i].довжина;
        td.style.textAlign = "right";
        tr.appendChild(td);

        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

document.body.appendChild(buildTable(RIVERS));