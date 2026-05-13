document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.side-btn');
    var pages = document.querySelectorAll('.page');

    function switchPage(tabNumber, button) {
        for (var i = 0; i < pages.length; i++) {
            pages[i].classList.remove('active-page');
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        button.classList.add('active');
        var activePage = document.getElementById('content' + tabNumber);
        if (activePage) {
            activePage.classList.add('active-page');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var tabNumber = button.getAttribute('data-tab');
        button.addEventListener('click', (function(tab, btn) {
            return function() {
                switchPage(tab, btn);
            };
        })(tabNumber, button));
    }
});