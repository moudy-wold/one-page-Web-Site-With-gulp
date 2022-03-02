let iconSideBar = document.querySelector('.toggle-sidebar'),
    sidebar = document.querySelector('.sidebar'),
    contentArea = document.querySelector('.content-area'),
    openLinks = document.querySelectorAll('.toggle-down'),
    openFullScreen = document.querySelector('.toogle-fullscreen'),
    opitionSetIcon = document.querySelector('.toggle-set');

iconSideBar.onclick = function() {
    sidebar.classList.toggle('activeside');
    contentArea.classList.toggle('activecontent');
}

openLinks.forEach((link) => {
    link.onclick = function() {

        this.parentElement.classList.toggle('open')

    }
})

openFullScreen.onclick = function() {
    if (this.classList.contains("open")) {
        openFullscreen()
    } else {
        closeFullscreen()

    }
    this.classList.toggle("open")
}

var elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

opitionSetIcon.onclick = function() {
    this.classList.toggle('fa-spin');
    this.parentElement.classList.toggle('hide')

}
let liColor = document.querySelectorAll('.color-opition ul li'),
    themeArr = [];
liColor.forEach((color) => {
    themeArr.push(color.dataset.theme);
})
liColor[0].classList.add('active');
liColor.forEach((color) => {
    color.onclick = function() {
        document.body.classList.remove(...themeArr)
        document.body.classList.add(this.dataset.theme)
        for (let i = 0; i < liColor.length; i++) {
            liColor[i].classList.remove('active');
        }
        this.classList.add('active');
    }

})
fonts = document.querySelector('.font-opition select')
fontArr = ['Libre', 'BhuTuka', 'League', 'Pacifico']

fonts.onclick = function() {
    for (let i = 0; i < fontArr.length; i++) {
        document.body.classList.remove(...fontArr);
    }
    document.body.classList.add(this.value);
    console.log(this.value)
}