window.addEventListener("load", () => {
    initScrollToTop();

});

let scrollToTopBtn, scrollTimeout;

function initScrollToTop() {
    scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if(!scrollToTopBtn) {
        return;
    }

    // check if distance from top of screen needs thte scroll button to show
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        addScrollToTopBtn();
    }

    // add the scrollListener
    document.addEventListener("scroll", scrollToTopListener);
}

function scrollToTopListener(e) {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            // add the button
            addScrollToTopBtn();
    
        } else {
    
            // remove the class list
            removeScrollToTopBtn();
        }

    }, 10);

}

function addScrollToTopBtn() {
    if(!scrollToTopBtn) return;

    if(!scrollToTopBtn.classList.contains('pd-show')) {
        // add the class list
        scrollToTopBtn.classList.add('pd-show');

        // force a repaint
        void(scrollToTopBtn.offsetHeight);

        // set the opacity style
        scrollToTopBtn.style.opacity = 1;
    }
}


function removeScrollToTopBtn() {
    if(!scrollToTopBtn) return;

    if(scrollToTopBtn.classList.contains('pd-show')) {
        scrollToTopBtn.classList.remove('pd-show');
        scrollToTopBtn.removeAttribute("style");
    }
    
}