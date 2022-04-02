
const burgerBtn = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav-mobile__block');
const pledgeModal = document.querySelector('.modal__back');
const modalShadow = document.querySelector('.modal__shadow');
const allRewardBtns = document.querySelectorAll('.card--pledge .card__button');
const modalClose = pledgeModal.querySelector('.modal__close');
const daysLeft = document.querySelector('.card__days');
const moneyGathered= document.querySelector('.card__money');
const barFill = document.querySelector('.card__progressbar--fill');
const backersTotal = document.querySelector('.card__backers');

//Show and close modals and menu
const mobileMenuHandler = () => {
    mobileNav.classList.toggle('active-block');
}
const handleModal = () => {
    if(pledgeModal.classList.contains('modal__back--active') || modalShadow.classList.contains('modal__shadow--active'))
    {
        pledgeModal.classList.remove('modal__back--active');
        modalShadow.classList.remove('modal__shadow--active');

    }
    else
    {
        pledgeModal.classList.add('modal__back--active');
        modalShadow.classList.add('modal__shadow--active');
    }
}
burgerBtn.addEventListener('click', mobileMenuHandler);
allRewardBtns.forEach(btn =>{
    btn.addEventListener('click', handleModal);
})
modalClose.addEventListener('click', handleModal);

//Remaining days
const countDays = (selectedDate) => {
    const endDate = selectedDate.getTime();
    const now = new Date().getTime();
    const remainingDays = Math.floor(((endDate - now) / (1000 * 60 * 60 * 24)));
    daysLeft.textContent = remainingDays;
}
countDays(new Date('Jun 23, 2022 15:00:00'));

//Set bar width
const computeBackedMoney = (goal) => {
    let gathered = parseInt(localStorage.getItem('amount')) || parseInt(moneyGathered.textContent.slice(1, moneyGathered.textContent.length).replace(',', ''));
    const percentage = Math.floor((gathered /1000 * 100) / goal);
    barFill.style.width = `${percentage}%`;
}
computeBackedMoney(100);

//Add money to goal
const addMoneyAndBacker = (moneyAmount) => {
    let gathered = parseInt(localStorage.getItem('amount')) || parseInt(moneyGathered.textContent.slice(1, moneyGathered.textContent.length).replace(',', ''));
    console.log(gathered);
    let backers =  parseInt(localStorage.getItem('backers')) || parseInt(backersTotal.textContent.replace(',', ''));
    console.log(backers);
    gathered+=(moneyAmount);
    backers++;
    moneyGathered.textContent=`$${gathered.toLocaleString()}`;
    backersTotal.textContent = `${backers.toLocaleString()}`;
    localStorage.setItem('amount', gathered);
    localStorage.setItem('backers', backers);
    
    computeBackedMoney(100);
}
addMoneyAndBacker(25);
// addMoneyAndBacker(2500);