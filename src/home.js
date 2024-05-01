class home {
    static createP(Text) {
        let p = document.createElement('p')
        p.textContent = Text
        return p
    }

    static build(content) {
        let element = this.createP('Hello World')
        content.appendChild(element) 
    }
}

export {home}