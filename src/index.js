import "./style.css"
import {home} from "./home.js"
import {menu} from "./menu.js"
import {about} from "./about.js"

const body = document.querySelector('body')
body.appendChild(document.createElement('header'))
body.appendChild(document.createElement('div'))
body.firstChild.appendChild(document.createElement('nav'))

let content = document.querySelector('div')
let navElement = document.querySelector('nav')
function navBar() {
    let homeBtn = document.createElement('button')
    let menuBtn = document.createElement('button')
    let aboutBtn = document.createElement('button')

    homeBtn.appendChild(createP('Home'))
    homeBtn.addEventListener('click', () => {
        clearBody()
        home()
    })
    navElement.appendChild(homeBtn)

    menuBtn.appendChild(createP('Menu'))
    menuBtn.addEventListener('click', () => {
        clearBody()
        menu()
    })
    navElement.appendChild(menuBtn)

    aboutBtn.appendChild(createP('About'))
    aboutBtn.addEventListener('click', () => {
        clearBody()
        about()
    })
    navElement.appendChild(aboutBtn)
}

function clearBody() {
    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

function createP(Text) {
    let p = document.createElement('p')
    p.textContent = Text
    return p
}
navBar()
