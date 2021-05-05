if (localStorage.getItem('theme')) {
    var themeStatus = localStorage.getItem('theme');
} else {
    var themeStatus = 'dark';
}
function GetTheme() {
    if(themeStatus == 'light') {
        LighterTheme();
    } else{
        DarkerTheme();
    }
}
let themeBtn = document.getElementById('theme-btn');
let themeEvent = themeBtn.addEventListener('click', () => {
    if(themeStatus == 'dark') {
        LighterTheme();
    } else{
        DarkerTheme();
    }
});

function LighterTheme() {
    let menuItem = document.querySelectorAll('.menu li a');
    document.querySelector('nav').style.background = "#ecf0f1";
    document.querySelector('nav p').style.color = "#34495e";
    document.body.style.background = "#34495e";
    document.querySelector('footer').style.background = "#ecf0f1";
    document.querySelector('footer p').style.color = "#34495e";
    document.querySelectorAll('footer p')[1].style.color = "#34495e";
    menuItem.forEach(x => {
        x.style.color = "#34495e";
    });
    themeStatus = 'light';
    localStorage.setItem('theme', 'light');
}

function DarkerTheme() {
    let menuItem = document.querySelectorAll('.menu li a');
    document.querySelector('nav').style.background = "#34495e";
    document.querySelector('nav p').style.color = "#ecf0f1";
    document.body.style.background = "#ecf0f1";
    document.querySelector('footer').style.background = "#34495e";
    document.querySelector('footer p').style.color = "#ecf0f1";
    document.querySelectorAll('footer p')[1].style.color = "#ecf0f1";
    menuItem.forEach(x => {
        x.style.color = "#ecf0f1";
    });
    themeStatus = 'dark';
    localStorage.setItem('theme', 'dark');
}