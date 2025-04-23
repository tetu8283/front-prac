    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const reset = document.getElementById("reset");
    const display = document.getElementById("display");

    let count = 0; 

    plus.addEventListener('click', () => {
        count++;
        display.innerText = count;
    });

    minus.addEventListener('click', () => {
        count--;
        display.innerText = count;
    });

    reset.addEventListener('click', () => {
        count = 0;
        display.innerText = count;
    });

