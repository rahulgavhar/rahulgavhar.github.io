let MenuBtn = document.querySelector('#MenuBtn');

MenuBtn.addEventListener('click', () => {
    openMenu();
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
        window.localStorage.setItem("is_ahead",Number.parseInt(`${new Date().getTime()}`))
        
    }else{
        if(message=="wait"){
            var display_timeleft = setInterval(()=>{
                var timeleft = Math.trunc((((Number.parseInt(window.localStorage.getItem("is_ahead"))+(10*60*1000)) - Number.parseInt(`${new Date().getTime()}`))/1000)/60);
                timeleft = timeleft  + " min " + Math.trunc((((Number.parseInt(window.localStorage.getItem("is_ahead"))+(10*60*1000)) - Number.parseInt(`${timeleft*1000*60 + (new Date().getTime())}`))/1000)) + " sec"
            if(timeleft.search("0 min")!=-1){
                timeleft = Math.trunc((((Number.parseInt(window.localStorage.getItem("is_ahead"))+(10*60*1000)) - Number.parseInt(`${new Date().getTime()}`))/1000)) + " sec"
            }
            document.querySelector('.popup').classList.add('active');
            document.querySelector('.popup .message').innerHTML = `Please Try Again after ${timeleft}`;
            document.querySelector('.popup .message').style.color = '#dce838';}, 200)
        }else{
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.popup .message').innerHTML = 'Email Not Sent | Try Again';
        document.querySelector('.popup .message').style.color = '#e74c3c';
        }
    }
    setTimeout(() => {
        clearInterval(display_timeleft);
        document.querySelector('.popup').classList.remove('active');
    }, 3000);
}

//Email from contact form
//Code protected from leaking
function _0x211c(_0x506308,_0x46f477){var _0x3ed81c=_0x3ed8();return _0x211c=function(_0x211cc9,_0x32b33e){_0x211cc9=_0x211cc9-0x1d6;var _0x3b79e5=_0x3ed81c[_0x211cc9];return _0x3b79e5;},_0x211c(_0x506308,_0x46f477);}function _0x3ed8(){var _0x2180b2=['<br>Subject:\x20','clear','name','getItem','398694mFYKYU','is_ahead','send','18BVyayl','localStorage','21631qYErXV','email','then','4169KoYtku','message','subject','value','Name:\x20','908045QmuWDO','3270575OjmTjI','<br>Message:\x20','1903752nGjejO','<br>Email:\x20','getElementById','32xiuBPb','1235796kGFZpM','Portfolio\x20Message:\x20','rahulgavharportfolio@gmail.com','8oSnGMP','wait','14660jMiDXU'];_0x3ed8=function(){return _0x2180b2;};return _0x3ed8();}(function(_0x4df5af,_0x1d3de5){var _0x204f3e=_0x211c,_0x969acd=_0x4df5af();while(!![]){try{var _0x3c0048=parseInt(_0x204f3e(0x1f1))/0x1*(-parseInt(_0x204f3e(0x1e1))/0x2)+parseInt(_0x204f3e(0x1ec))/0x3+parseInt(_0x204f3e(0x1e2))/0x4+-parseInt(_0x204f3e(0x1db))/0x5*(parseInt(_0x204f3e(0x1ef))/0x6)+parseInt(_0x204f3e(0x1dc))/0x7+parseInt(_0x204f3e(0x1e5))/0x8*(-parseInt(_0x204f3e(0x1de))/0x9)+-parseInt(_0x204f3e(0x1e7))/0xa*(-parseInt(_0x204f3e(0x1d6))/0xb);if(_0x3c0048===_0x1d3de5)break;else _0x969acd['push'](_0x969acd['shift']());}catch(_0x4008e0){_0x969acd['push'](_0x969acd['shift']());}}}(_0x3ed8,0x586fb));function sendEmail(){var _0xed18e2=_0x211c;window[_0xed18e2(0x1f0)][_0xed18e2(0x1eb)](_0xed18e2(0x1ed))!=null&&Number['parseInt'](''+new Date()['getTime']())-window[_0xed18e2(0x1f0)]['getItem'](_0xed18e2(0x1ed))<0xa*0x3c*0x3e8?popup(_0xed18e2(0x1e6)):Email[_0xed18e2(0x1ee)]({'SecureToken':'4af88da5-c5a1-43b1-8c4f-9fa1f97661c7','To':_0xed18e2(0x1e4),'From':_0xed18e2(0x1e4),'Subject':_0xed18e2(0x1e3)+document[_0xed18e2(0x1e0)](_0xed18e2(0x1d8))[_0xed18e2(0x1d9)],'Body':_0xed18e2(0x1da)+document[_0xed18e2(0x1e0)](_0xed18e2(0x1ea))[_0xed18e2(0x1d9)]+_0xed18e2(0x1df)+document[_0xed18e2(0x1e0)](_0xed18e2(0x1f2))['value']+_0xed18e2(0x1e8)+document[_0xed18e2(0x1e0)](_0xed18e2(0x1d8))[_0xed18e2(0x1d9)]+_0xed18e2(0x1dd)+document['getElementById'](_0xed18e2(0x1d7))[_0xed18e2(0x1d9)]})[_0xed18e2(0x1f3)](_0x418a19=>{var _0x5f33bf=_0xed18e2;window['localStorage'][_0x5f33bf(0x1e9)](),popup(_0x418a19);});}

//disable right click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

//carousel
const myCarouselElement = document.querySelector('.carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2500,
  wrap: true,
  pause: "hover"
})

//themechange
function themeChange() {
    if(document.querySelector('.themechange').getAttribute('data-theme') == 'dark') {
        document.querySelector('.themechange').setAttribute('data-theme','light');
        document.querySelector('.bi-sun').setAttribute("class","bi bi-sun active");
        document.querySelector('.bi-moon').setAttribute("class","bi bi-moon glow");

        //change :root
        document.querySelector(':root').style.setProperty('--bodyColor', '#ffffff');
        document.querySelector(':root').style.setProperty('--bgColor', '#dedede');
        document.querySelector(':root').style.setProperty('--textColor', '#000000');
        document.querySelector(':root').style.setProperty('--shadow', '0 0 50px 0 rgba(255, 255, 255, 0.5)');
    }else {
        document.querySelector('.themechange').setAttribute('data-theme','dark');
        document.querySelector('.bi-moon').setAttribute("class","bi bi-moon active");
        document.querySelector('.bi-sun').setAttribute("class","bi bi-sun glow");
        
        //change :root
        document.querySelector(':root').style.setProperty('--bodyColor', '#000000');
        document.querySelector(':root').style.setProperty('--bgColor', '#141414');
        document.querySelector(':root').style.setProperty('--textColor', '#ffffff');
        document.querySelector(':root').style.setProperty('--shadow', '0 0 50px 0 rgba(0,0,0, 0.5)');
    }
    
}

//themechange button on mobile
let themeChangeBtn = document.querySelector('.theme-button');
let tcbmigrate='<span class="theme-button"  onclick="themeChange()"> <span class="themechange" data-theme="dark"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-sun" data-theme="light" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" data-theme="dark" class="bi bi-moon" viewBox="0 0 16 16"> <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/> </svg> </span> </span>';
if (window.innerWidth < 930) {
    document.querySelector('.theme-button').remove();
    document.querySelector('header').insertAdjacentHTML('beforeend', tcbmigrate);
}

//for both mobile and desktop
document.querySelector(".bi-moon").style.opacity = "0";
