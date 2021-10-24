function visible() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('A').classList.add('changeColorAccueil');
        document.getElementById('A').classList.replace('colorBorderAccueil', 'changeColorAccueil')
    } else {

        document.getElementById('A').classList.replace('changeColorAccueil', 'colorBorderAccueil')
    }
}



window.onscroll = function() {
    visible();

};