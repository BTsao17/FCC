function openDrawerNav() {
  const drawerOverlay = document.getElementById('overlay');
  drawerOverlay.className += ' visible';
  //document.body.style.backgroundColor = "rgba(0,0,0,0.15)";
}

function closeDrawerNav() {
  const drawerOverlay = document.getElementById('overlay');
  drawerOverlay.className = drawerOverlay.className.replace(' visible', '');
  //document.body.style.backgroundColor = "initial";
}

//adding active class to primary/header Nav List
const primaryNavList = document.getElementById('primaryNavList');

const primaryNavLinks = primaryNavList.getElementsByClassName('pri-nav-link');

for (let i = 0; i < primaryNavLinks.length; i++) {
  primaryNavLinks[i].addEventListener('click', function() {
    let current = primaryNavList.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

//add active class to secondary Nav
const secondaryNavList = document.getElementById('secondaryNavList');

const secondaryNavLinks = secondaryNavList.getElementsByClassName('sec-nav-link');

for (let i = 0; i < secondaryNavLinks.length; i++) {
  secondaryNavLinks[i].addEventListener('click', function() {
    let current = secondaryNavList.getElementsByClassName('sec-nav-link active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

//add active class to nested links in Secondary Nav
const nestedNavLinks = secondaryNavList.getElementsByClassName('nested-link');

for (let i = 0; i < nestedNavLinks.length; i++) {
  nestedNavLinks[i].addEventListener('click', function() {
    let current = secondaryNavList.getElementsByClassName('nested-link active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

//collapsible navbars
const coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('open');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

//auto scrolling to section
let mainNavLinks = document.querySelectorAll('.main-nav ul li a');
let mainSections = document.querySelectorAll('.main .main-section');

let lastId;
let cur = [];

window.addEventListener('scroll', (event) => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('current');
    }
    else {
      link.classList.remove('current');
    }
  });
});
