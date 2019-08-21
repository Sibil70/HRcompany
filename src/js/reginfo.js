
let regInfo = document.querySelectorAll('.js-form-info'),
    regPopupClose = document.querySelectorAll('.js-close-popup');

regInfo.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.target.nextElementSibling.classList.toggle('form__popup--active');
    });
});

regPopupClose.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.target.parentNode.classList.toggle('form__popup--active');
    })
});
