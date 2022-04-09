const daysLeft = document.querySelector('.card__days');
const moneyGathered= document.querySelector('.card__money');
const barFill = document.querySelector('.card__progressbar--fill');
const backersTotal = document.querySelector('.card__backers');
const continueButtons= document.querySelectorAll('input[data-tier]');
const itemsLeft= document.querySelectorAll('.counter');

const rewards = [
    {
        name: 'Bamboo',
        tier: 1,
        value: 25,
        left: 101
    },
    {
        name: 'Black',
        tier: 2,
        value: 75,
        left: 64
    },
    {
        name: 'Mahogany',
        tier: 3,
        value: 200,
        left: 0
    }];

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
    gathered+=moneyAmount;
    backers++;
    moneyGathered.textContent=`$${gathered.toLocaleString()}`;
    backersTotal.textContent = `${backers.toLocaleString()}`;
    localStorage.setItem('amount', gathered);
    localStorage.setItem('backers', backers);
    
    computeBackedMoney(100);
}
//reawrds
const handleOrder = (e) => {
    e.preventDefault();
    if (rewards[e.target.dataset.tier].left <= 0) {
        console.log("%cOUT OF STOCK DUDE!!", "color:red; font-size:36px");
        return;
    }
     parseInt(e.target.previousElementSibling.value) != rewards[e.target.dataset.tier].value ? addMoneyAndBacker(e.target.previousElementSibling.value) : addMoneyAndBacker(rewards[e.target.dataset.tier].value);
    rewards[e.target.dataset.tier].left--;
    itemsLeft[e.target.dataset.tier].textContent = rewards[e.target.dataset.tier].left;
    itemsLeft[parseInt(e.target.dataset.tier) + 3].textContent = rewards[e.target.dataset.tier].left;
    
}
continueButtons.forEach(btn => btn.addEventListener('click', handleOrder))