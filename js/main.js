// nav header
let listitemHeader = document.querySelectorAll('.menu-header__item');
listitemHeader.forEach(item => {
    item.addEventListener('click', function(e) {
        listitemHeader.forEach(item => {
            item.classList.remove('menu__item--active');
        });
        item.classList.add('menu__item--active');
    });
});
document.querySelector('.menu-header__item').click();

// nav button-burger
let burgerBtn = document.querySelector('.burger-btn');
let menuHeader = document.querySelector('.menu-header');
burgerBtn.addEventListener('click', function() {
    let condition = burgerBtn.classList.toggle('burger-btn--active');
    if(condition == true) {
        menuHeader.classList.add('menu-header--active');
    } else {
        menuHeader.classList.remove('menu-header--active');
    }
});

// nav portfolio
let listItemPortfolio = document.querySelectorAll('.menu-portfolio__item');
let listLinkPortfolio = document.querySelectorAll('.menu-portfolio__link');
let portfolioTab = document.querySelectorAll('.portfolio__tab');
listItemPortfolio.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        listItemPortfolio.forEach(item => {
            item.classList.remove('menu-portfolio__item--active');
        });
        item.classList.add('menu-portfolio__item--active');

        listLinkPortfolio.forEach(link => {
            link.addEventListener('click', function(e) {
                let hrefValue = link.getAttribute('href');
                let content = document.querySelector(hrefValue);

                portfolioTab.forEach(content => {
                    content.classList.remove('portfolio__tab--active');
                });
                content.classList.add('portfolio__tab--active');
            });
        });
    });
});
document.querySelector('.menu-portfolio__item').click();

// slider comment
$(function() {
    $('.comment__items').slick({
        dots: true,
        nextArrow: '<svg class="comment-arrow arrow-next" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_140)"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z" fill="#333333"/></g><defs><clipPath id="clip0_0_140"><rect width="35" height="35" fill="white"/></clipPath></defs></svg>',
        prevArrow: '<svg class="comment-arrow arrow-prev" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013V18.6013Z" fill="#333333"/></svg>'
    });
});