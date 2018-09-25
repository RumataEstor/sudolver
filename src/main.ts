const body = document.body;
for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
        const el = document.createElement("input");
        el.classList.add("cell", "row" + i, "col" + j);
        body.appendChild(el);
    }
}
