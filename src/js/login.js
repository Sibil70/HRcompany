let form = document.querySelector('#login-form');
let formInputs = form.querySelectorAll('input');
let formBtn = form.querySelector('button');

let hr = ['hr', 'hr'];
let dir = ['dir', 'dir'];


function compare(a1, a2) {
    return a1.length == a2.length && a1.every((v, i) => v === a2[i])
}

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputsVal = [];

    formInputs.forEach(element => {
        inputsVal.push(element.value);
    });

    let allowHR = compare(hr, inputsVal);
    let allowDIR = compare(dir, inputsVal);

    if (allowHR) {
        window.location.href = "./hr-pages/hr-page.html";
    } else if (allowDIR) {
        window.location.href = "./director-pages/director-my_page.html";
    } else {
        alert('Вы не зарегистрированы!');
    }
})
