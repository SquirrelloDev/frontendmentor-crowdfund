
const burgerBtn = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav-mobile__block');
const pledgeModal = document.querySelector('.modal__back');
const modalShadow = document.querySelector('.modal__shadow');
const allRewardBtns = document.querySelectorAll('.card--pledge .card__button');
const modalClose = pledgeModal.querySelector('.modal__close');
let modalCards = Array.from(pledgeModal.querySelectorAll('.card'));
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

const filterCards = () => {
    const cards= modalCards.filter(item =>
        {
            return !item.classList.contains('card__pledge-manager') && !item.classList.contains('card--disabled');
        })
    return cards;
}

let previos;
function changeFocus() {
    if (previos != null) {
        previos.style.borderColor = 'hsl(0,0%,90%)';
        previos.querySelector('.card__pledge-manager') == null ? '' : previos.querySelector('.card__pledge-manager').style.display = 'none';
    }
    this.style.borderColor = 'hsl(176, 50%, 47%)';
    this.querySelector('.card__pledge-manager') == null ? '' : this.querySelector('.card__pledge-manager').style.display = 'block';
    previos = this;
}
modalCards = filterCards();
modalCards.forEach(card => card.addEventListener('click', changeFocus))

