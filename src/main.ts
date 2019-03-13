const inputs: HTMLInputElement[] = [];
const LSIZE = 9 * 9;

function solve() {
    const solutions = document.getElementsByClassName('js-solutions')[0];
    solutions.innerHTML = '';
    let solutionCount = 10;

    const values = new Int8Array(LSIZE);
    for (let i = 0; i < LSIZE; ++i) {
        const value = parseInt(inputs[i].value);
        values[i] = value;
    }
    console.log(values); /**/
    /* const values = [
        0, 8, 5, 9, 0, 1, 0, 0, 3,
        0, 0, 2, 3, 0, 5, 6, 0, 0,
        4, 0, 7, 2, 0, 0, 0, 0, 0,
        0, 1, 6, 7, 0, 0, 0, 0, 8,
        0, 5, 0, 0, 1, 0, 0, 6, 0,
        2, 0, 0, 0, 0, 9, 5, 1, 0,
        0, 0, 0, 0, 0, 4, 3, 0, 6,
        0, 0, 9, 5, 0, 7, 8, 0, 0,
        8, 0, 0, 1, 0, 3, 2, 7, 0
    ]; /**/
    /* const values = [
        0, 0, 0, 0, 7, 8, 0, 6, 0,
        0, 0, 0, 3, 0, 0, 8, 0, 2,
        0, 0, 8, 0, 0, 0, 0, 0, 1,
        0, 8, 5, 1, 4, 0, 0, 0, 0,
        3, 0, 0, 0, 0, 0, 0, 0, 5,
        0, 0, 0, 0, 3, 7, 6, 2, 0,
        1, 0, 0, 0, 0, 0, 4, 0, 0,
        9, 0, 6, 0, 0, 3, 0, 0, 0,
        0, 2, 0, 7, 5, 0, 0, 0, 0
    ]; /* very hard */

    function rowContains(row: number, value: number) {
        for (let col = 0; col < 9; ++col) {
            if (values[row * 9 + col] == value) return true;
        }
        return false;
    }

    function colContains(col: number, value: number) {
        for (let row = 0; row < 9; ++row) {
            if (values[row * 9 + col] == value) return true;
        }
        return false;
    }

    function boxContains(row: number, col: number, value: number) {
        const i = Math.floor(row / 3) * 3 * 9 + Math.floor(col / 3) * 3;
        for (row = 0; row < 3; ++row) {
            for (col = 0; col < 3; ++col) {
                if (values[i + row * 9 + col] == value) return true;
            }
        }
        return false;
    }

    function dumpSolution() {
        const field = document.createElement("div");
        field.classList.add('field');

        for (let row = 0; row < 9; ++row) {
            for (let col = 0; col < 9; ++col) {
                const el = document.createElement("span");
                el.classList.add("cell", "col" + col, "row" + row);
                el.innerText = values[row * 9 + col].toString();
                field.appendChild(el);
            }
        }
        solutions.appendChild(field);
        solutionCount -= 1;
        return solutionCount <= 0;
    }

    function getCellChoices(i: number, maxChoices: number) {
        if (values[i] != 0) return;

        const row = Math.floor(i / 9);
        const col = i - row * 9;
        const result = [];

        for (let value = 1; value < 10; ++value)
        {
            if (!rowContains(row, value) && !colContains(col, value) &&
                !boxContains(row, col, value))
            {
                result.push(value);
                if (result.length == maxChoices) return;
            }
        }
        return result;
    }

    function findBestCell() {
        let best;
        let bestChoicesLen = 10;

        for (let i = 0; i < LSIZE; ++i) {
            let choices = getCellChoices(i, bestChoicesLen);

            if (!choices) {
                continue;
            }

            else if (choices.length <= 1) {
                return {i: i, choices: choices};
            }

            best = {i: i, choices: choices};
            bestChoicesLen = choices.length;
        }

        return best;
    }

    function solveStep() {
        const choice = findBestCell();
        if (!choice) {
            return dumpSolution();
        }

        for (let value of choice.choices)
        {
            values[choice.i] = value;
            if (solveStep()) return true;
        }
        values[choice.i] = 0;
        return false;
    }

    solveStep();
}

(function () {
    const field = document.getElementsByClassName("js-field")[0];
    let prev: HTMLInputElement | null = null;
    for (let row = 0; row < 9; ++row) {
        for (let col = 0; col < 9; ++col) {
            const el = document.createElement("input");
            el.maxLength = 1;
            el.classList.add("cell", "col" + col, "row" + row);
            field.appendChild(el);
            inputs[row * 9 + col] = el;
            if (prev) {
                prev.addEventListener("input", function() {
                    if (this.value.length > 0) el.focus();
                });
            }
            prev = el;
        }
    }

    document.getElementsByClassName("js-solve")[0].addEventListener("click", solve);
})();
