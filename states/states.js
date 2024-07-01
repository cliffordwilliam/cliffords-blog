const navElement = document.getElementById("nav");
const mainElement = document.getElementById("main");
// const asideElement = document.getElementById("aside");
// const footerElement = document.getElementById("footer");
let currentPage = "home";

function highlightjsSetLightCss() {
    var link = document.getElementById('highlightjs-stylesheet');
    link.href = './lib/atom-one-light.min.css';
}

function highlightjsSetDarkCss() {
    var link = document.getElementById('highlightjs-stylesheet');
    link.href = './lib/atom-one-dark.min.css';
}