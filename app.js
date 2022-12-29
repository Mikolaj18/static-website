addEventListener('DOMContentLoaded', () => {
    const selectors = {
        collapse: document.querySelector('.js-collapse'),
        nav: document.querySelector('.js-nav'),
        boxes: document.querySelectorAll('.js-box'),
        navItem: document.querySelectorAll('.js-nav-item'),
    };
    
    const css = {
        active: 'active',
    };

    const addClass = (selector, className) => {
        selector.classList.addClass(`${className}`);
    }

    const removeClass = (selector, className) => {
        selector.classList.remove(`${className}`);
    }

    const toggleClass = (selector, className) => {
        selector.classList.toggle(`${className}`);
    }

    const handleCollapseButtonClick = () => {
        toggleClass(selectors.collapse, css.active);
        toggleClass(selectors.nav, css.active);
    }

    const handleReadMoreClick = () => {
        selectors.boxes.forEach(box => {
            const readMoreButton = box.querySelector('.js-read-more');
            const details = box.querySelector('.js-details');
            readMoreButton.addEventListener('click', () => {
              toggleClass(details, css.active);
              details.classList.contains(css.active) ? readMoreButton.innerHTML = 'Mniej' : readMoreButton.innerHTML = 'Więcej';
            });
        });
    }

    const closeMenuAfterClickItem = () => {
        selectors.navItem.forEach(item => {
            item.addEventListener('click', () => {
                removeClass(selectors.nav, css.active);
                removeClass(selectors.collapse, css.active);
            });
        });
    }
 
    handleReadMoreClick();
    closeMenuAfterClickItem();
    selectors.collapse.addEventListener('click', handleCollapseButtonClick);
});
