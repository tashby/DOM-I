const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navBar = document.querySelectorAll('nav a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];
 
//step3
let navStepThree = document.querySelector('nav');
const prependLink = document.createElement('a');
prependLink.textContent = 'prepend';
navStepThree.prepend(prependLink);

const appendLink = document.createElement('a');
appendLink.textContent = 'append';
navStepThree.appendChild(appendLink);

navBar[0].style.color ='green';
navBar[1].style.color ='green';
navBar[2].style.color ='green';
navBar[3].style.color ='green';
navBar[4].style.color ='green';
navBar[5].style.color ='green';


let ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`)

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];

let mainContentSections = document.querySelectorAll('.main-content .text-content h4');
mainContentSections[0].textContent = siteContent['main-content']['features-h4'];
mainContentSections[1].textContent = siteContent['main-content']['about-h4'];
mainContentSections[2].textContent = siteContent['main-content']['services-h4'];
mainContentSections[3].textContent = siteContent['main-content']['product-h4'];
mainContentSections[4].textContent = siteContent['main-content']['vision-h4'];


let mainContentParagraphs = document.querySelectorAll('.main-content .text-content p');
mainContentParagraphs[0].textContent = siteContent['main-content']['features-content'];
mainContentParagraphs[1].textContent = siteContent['main-content']['about-content'];
mainContentParagraphs[2].textContent = siteContent['main-content']['services-content'];
mainContentParagraphs[3].textContent = siteContent['main-content']['product-content'];
mainContentParagraphs[4].textContent = siteContent['main-content']['vision-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

let footerCopyright = document.querySelector('footer p');
footerCopyright.textContent = siteContent['footer']['copyright']