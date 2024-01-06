let MenuBtn = document.querySelector('#MenuBtn');

MenuBtn.addEventListener('click', () => {
    //menu btn rotate
    document.querySelector('body').classList.toggle('menuActive');
    if(MenuBtn.classList.contains('fa-xmark')) {
        MenuBtn.style.transform = 'rotate(0deg)';
        MenuBtn.style.transition = '0.5s';
    }else{
        MenuBtn.style.transform = 'rotate(90deg)';
    MenuBtn.style.transition = '0.5s';
    }
    MenuBtn.classList.toggle('fa-xmark');

    //Avoid background scroll when menu is active
    document.querySelector('body').classList.toggle('noScroll');
});

// Type Writer Effect
let type = new Typed('.typer', {
    strings: ['Front End Developer', 'Freelancer', 'Open Source Contributor'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Initial value of down arrow
let scroll = window.scrollY;
if(scroll==0){
    document.querySelector('.down-arrow').setAttribute("data-hidden", "false");
}else{
    document.querySelector('.down-arrow').setAttribute("data-hidden", "true");
}
window.addEventListener('scroll', () => {
    // Hide down arrow
    let scroll = window.scrollY;
    if(scroll > 0) {
        document.querySelector('.down-arrow').setAttribute("data-hidden", "true");
    }else{
        document.querySelector('.down-arrow').setAttribute("data-hidden", "false");
    }

    // Active Nav Links
    let section = document.querySelectorAll('section');
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let navLinks = document.querySelectorAll('header nav ul li a');
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
});

//Skills
const progressBars = document.querySelectorAll('.inner-bar');

window.addEventListener('scroll', function(){
    progressBars.forEach(function(progressBar){
        const rect = progressBar.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom >= 0){
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%';
        }
    });
});

//Popup
function popup(message) {
    if(message=='OK'){
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.popup .message').innerHTML = 'Email Sent Successfully! I will contact you soon';
        document.querySelector('.popup .message').style.color = '#2ecc71';
    }else{
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.popup .message').innerHTML = 'Email Not Sent | Try Again';
        document.querySelector('.popup .message').style.color = '#e74c3c';
    }
    setTimeout(() => {
        document.querySelector('.popup').classList.remove('active');
    }, 3000);
}

//Email from contact form
//Code protected from leaking
(function(_0x11020f,_0x5c9e35){var _0x570435=_0x28be,_0x2b6ea7=_0x11020f();while(!![]){try{var _0x27a447=parseInt(_0x570435(0x1a8))/0x1*(-parseInt(_0x570435(0x1ab))/0x2)+-parseInt(_0x570435(0x1aa))/0x3*(parseInt(_0x570435(0x1a7))/0x4)+parseInt(_0x570435(0x1b8))/0x5*(parseInt(_0x570435(0x1b6))/0x6)+-parseInt(_0x570435(0x1a6))/0x7+parseInt(_0x570435(0x1af))/0x8*(-parseInt(_0x570435(0x1ac))/0x9)+-parseInt(_0x570435(0x1a9))/0xa+-parseInt(_0x570435(0x1b7))/0xb*(-parseInt(_0x570435(0x1a2))/0xc);if(_0x27a447===_0x5c9e35)break;else _0x2b6ea7['push'](_0x2b6ea7['shift']());}catch(_0x5d91c5){_0x2b6ea7['push'](_0x2b6ea7['shift']());}}}(_0xeaec,0x5e33a));function _0x28be(_0x2c5a63,_0x1796bb){var _0xeaec1f=_0xeaec();return _0x28be=function(_0x28be4e,_0x5f400){_0x28be4e=_0x28be4e-0x1a2;var _0x472479=_0xeaec1f[_0x28be4e];return _0x472479;},_0x28be(_0x2c5a63,_0x1796bb);}function sendEmail(){var _0x504bd6=_0x28be;Email[_0x504bd6(0x1b0)]({'SecureToken':'4af88da5-c5a1-43b1-8c4f-9fa1f97661c7','To':_0x504bd6(0x1a4),'From':_0x504bd6(0x1a4),'Subject':_0x504bd6(0x1b1)+document[_0x504bd6(0x1a3)](_0x504bd6(0x1b4))[_0x504bd6(0x1b5)],'Body':'Name:\x20'+document[_0x504bd6(0x1a3)](_0x504bd6(0x1b9))['value']+_0x504bd6(0x1b2)+document['getElementById']('email')[_0x504bd6(0x1b5)]+_0x504bd6(0x1a5)+document['getElementById'](_0x504bd6(0x1b4))[_0x504bd6(0x1b5)]+_0x504bd6(0x1b3)+document[_0x504bd6(0x1a3)](_0x504bd6(0x1ad))[_0x504bd6(0x1b5)]})[_0x504bd6(0x1ae)](_0x39a115=>popup(_0x39a115));}function _0xeaec(){var _0x193ac0=['5575taCDXO','name','30510936djmBgD','getElementById','rahulgavharportfolio@gmail.com','<br>Subject:\x20','3240230yemHsF','514772kTyBaN','79836fxakil','111200CJsZva','12LUNIoE','16PqMpsb','387hYZOFW','message','then','138088ohyNLX','send','Portfolio\x20Message:\x20','<br>Email:\x20','<br>Message:\x20','subject','value','1146XRxkpI','11uofUyw'];_0xeaec=function(){return _0x193ac0;};return _0xeaec();}

//disable right click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

//carousel
if(window.innerWidth <730){
    const myCarouselElement = document.querySelector('.carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false,
  loop: true,
  pause: false
})
}else{
    const myCarouselElement = document.querySelector('.carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: true,
  loop: true,
  pause: false
})
}

//themechange
function themeChange() {
    if(document.querySelector('.themechange').getAttribute('data-theme') == 'dark') {
        document.querySelector('.themechange').setAttribute('data-theme','light');
        document.querySelector('.bi-sun').setAttribute("class","bi bi-sun active");
        document.querySelector('.bi-moon').setAttribute("class","bi bi-moon glow");

        hitTheme=true;
        hideMenu();
        hitTheme=undefined;

        //change :root
        document.querySelector(':root').style.setProperty('--bodyColor', '#ffffff');
        document.querySelector(':root').style.setProperty('--bgColor', '#dedede');
        document.querySelector(':root').style.setProperty('--textColor', '#000000');
        document.querySelector(':root').style.setProperty('--shadow', '0 0 50px 0 rgba(255, 255, 255, 0.5)');
    }else {
        document.querySelector('.themechange').setAttribute('data-theme','dark');
        document.querySelector('.bi-moon').setAttribute("class","bi bi-moon active");
        document.querySelector('.bi-sun').setAttribute("class","bi bi-sun glow");
        
        hitTheme=true;
        hideMenu();
        hitTheme=undefined;
        //change :root
        document.querySelector(':root').style.setProperty('--bodyColor', '#000000');
        document.querySelector(':root').style.setProperty('--bgColor', '#141414');
        document.querySelector(':root').style.setProperty('--textColor', '#ffffff');
        document.querySelector(':root').style.setProperty('--shadow', '0 0 50px 0 rgba(0,0,0, 0.5)');
    }
    
}

//themechange button on mobile
let themeChangeBtn = document.querySelector('.theme-button');
let tcbmigrate='<button class="theme-button"  onclick="themeChange()"> <span class="themechange" data-theme="dark"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-sun" data-theme="light" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" data-theme="dark" class="bi bi-moon" viewBox="0 0 16 16"> <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/> </svg> </span> </button>';
if (window.innerWidth < 930) {
    document.querySelector('.theme-button').remove();
    document.querySelector('header').insertAdjacentHTML('beforeend', tcbmigrate);
}

//for both mobile and desktop
document.querySelector(".bi-moon").style.opacity = "0";