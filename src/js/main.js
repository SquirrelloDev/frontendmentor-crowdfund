const burgerBtn = document.querySelector('.nav__burger');
const mobileNav = document.querySelector('.nav-mobile__block');
const pledgeModal = document.querySelector('.modal__back');
const modalShadow = document.querySelector('.modal__shadow');
const allRewardBtns = document.querySelectorAll('.card--pledge .card__button');
const modalClose = pledgeModal.querySelector('.modal__close');
const bookmarkBtns = document.querySelectorAll('.card__buttons-box button');
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
    if(window.innerWidth >= 768)
    {
        this.querySelector('.card__pledge-manager') == null ? '' : this.querySelector('.card__pledge-manager').style.display = 'flex';
    }
    else
    {
        this.querySelector('.card__pledge-manager') == null ? '' : this.querySelector('.card__pledge-manager').style.display = 'block';
    }
    previos = this;
}
let flag = false;
const changeSrc = (e) => {
    console.log(e.target);

    if(e.target.classList.contains('bookmark-ico-mobile') && !flag)
    {
        e.target.setAttribute('src', './dist/img/icon-bookmark-marked.svg');
        flag = !flag
    }
    else
    {
        e.target.setAttribute('src', './dist/img/icon-bookmark.svg');
        flag = !flag;
    }
    if(e.target.closest('.card__button').classList.contains('card__button--bookmark--desktop') && !flag)
    {
        e.target.closest('.card__button').firstChild.setAttribute('src', './dist/img/icon-bookmark-marked.svg');
        e.target.closest('.card__button').lastChild.style.color = 'hsl(176, 50%, 47%)';
        e.target.closest('.card__button').lastChild.textContent = 'Bookmarked!';
        flag = !flag;
    }
    else
    {
        e.target.closest('.card__button').firstChild.setAttribute('src', './dist/img/icon-bookmark.svg');
        e.target.closest('.card__button').lastChild.style.color = 'hsl(0, 0%, 48%)';
        e.target.closest('.card__button').lastChild.textContent = 'Bookmark';
        flag = !flag;
    }
}
bookmarkBtns.forEach(btn =>
    {
        btn.addEventListener('click', changeSrc);
    })


window.addEventListener('resize', ()=>
{
    if(previos == null) return;
    window.innerWidth >= 768 ? previos.querySelector('.card__pledge-manager').style.display = 'flex' : previos.querySelector('.card__pledge-manager').style.display = 'block'
})
modalCards = filterCards();
modalCards.forEach(card => card.addEventListener('click', changeFocus));