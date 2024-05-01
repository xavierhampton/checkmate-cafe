class menu {
    static createP(Text, cls) {
        let p = document.createElement('p')
        p.textContent = Text
        p.classList.add(cls)
        return p
    }
    static createDiv(cls) {
        const d = document.createElement('div')
        d.classList.add(cls)
        return d
    }
    static createh1(Text, cls) {
        const h = document.createElement('h1')
        h.textContent = Text
        h.classList.add(cls)
        return h
    }

    static build(content) {
        const container = this.createDiv('container')
        const page = this.createDiv('page')
        page.appendChild(this.createh1('~ The Menu ~', 'title'))




        container.appendChild(page)
        content.appendChild(container) 
    }
}

export {menu}