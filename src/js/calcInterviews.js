let countInterviews = document.querySelector('.sidebar__request-span');

function calcInterviews() {
    const interviewsArr = document.querySelectorAll('.interview');
    countInterviews.textContent = interviewsArr.length;
    if(countInterviews.textContent == 0) {
        console.log('empty');
    }
};

document.addEventListener("DOMContentLoaded", calcInterviews);