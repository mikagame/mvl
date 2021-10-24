//affiche services
function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('services').classList.add('show');
        document.getElementById('services').classList.replace('hide', 'show');
    } else {
        document.getElementById('services').classList.replace('show', 'hide');
    }
}

window.onscroll = function() {
    visible()
};

//affiche projets
function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('projets').classList.add('show');
        document.getElementById('projets').classList.replace('hide', 'show');
    } else {
        document.getElementById('projets').classList.replace('show', 'hide');
    }
}

window.onscroll = function() {
    visible()
};