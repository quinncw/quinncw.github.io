function handleRouting() {
    let hash = window.location.hash || '#home';

    const pages = document.querySelectorAll('.page');
pages.forEach(page => page.classList.remove('active-page'));

const targetPage = document.querySelector(hash);
if (targetPage) {
    targetPage.classList.add('active-page');
}
const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('DOMContentLoaded', handleRouting);
window.addEventListener('hashchange', handleRouting);
