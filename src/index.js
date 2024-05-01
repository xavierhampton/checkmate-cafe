import "./style.css"
import pawnImg from './assets/pawn.png'
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

    navElement.appendChild(createPic(pawnImg))
    homeBtn.appendChild(createP('Home'))
    homeBtn.addEventListener('click', () => {
        clearBody()
        homeBtn.classList.add('selected')
        home.build(content)
    })
    navElement.appendChild(homeBtn)

    menuBtn.appendChild(createP('Menu'))
    menuBtn.addEventListener('click', () => {
        clearBody()
        menuBtn.classList.add('selected')
        menu.build(content)
    })
    navElement.appendChild(menuBtn)

    aboutBtn.appendChild(createP('About'))
    aboutBtn.addEventListener('click', () => {
        clearBody()
        aboutBtn.classList.add('selected')
        about.build(content)
    })
    navElement.appendChild(aboutBtn)
    navElement.appendChild(createPic(pawnImg))

    home.build(content)
    homeBtn.classList.add('selected')
}

function clearBody() {
    for (let i = 0; i < 5; i++) {
        navElement.children[i].classList.remove('selected')
    }
    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

function createP(Text) {
    const p = document.createElement('p')
    p.textContent = Text
    return p
}
function createPic(src) {
    const img = new Image()
    img.src = src
    return img
}
navBar()

