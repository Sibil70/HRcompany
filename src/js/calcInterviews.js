let countSpan = document.querySelector('.sidebar__request-span');

function calcItems(item) {
    const itemsArr = document.querySelectorAll(item);
    countSpan.textContent = itemsArr.length;
    if(countSpan.textContent == 0) {
        countSpan.style.display = 'none';
    }
};


if(window.location.href.includes('director')) {
    document.addEventListener("DOMContentLoaded", calcItems('.interview'));
} else if (window.location.href.includes('hr')) {
    document.addEventListener("DOMContentLoaded", calcItems('.request'));
}
