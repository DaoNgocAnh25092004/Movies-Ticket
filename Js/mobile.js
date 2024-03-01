//-----------------------Sự kiện click icon memu trên header
const iconMenuHeader = document.querySelector('.header__menu--mobile');
const menuHeader = document.querySelector('.header__center');
const overlay = document.querySelector('.overlay');
const closeMenuHeader = document.querySelector('.header__center__mobile--close');

iconMenuHeader.addEventListener('click', () => {
    menuHeader.style.display = 'block';
    overlay.style.display = 'block';
    closeMenuHeader.style.display = 'block';
})
overlay.addEventListener('click', () => {
    menuHeader.style.display = 'none';
    overlay.style.display = 'none';
    closeMenuHeader.style.display = 'none';
})
closeMenuHeader.addEventListener('click', () => {
    menuHeader.style.display = 'none';
    overlay.style.display = 'none';
    closeMenuHeader.style.display = 'none';
})