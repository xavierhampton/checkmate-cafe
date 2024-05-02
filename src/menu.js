class menu {
    static createElement(e, t, c) {
        const tmp = document.createElement(e)
        tmp.textContent = t
        if (c){
            tmp.classList.add(c)
        }
        return tmp
    }
    static makeItem(t,img) {
        return
    }

    static build(content) {
        const container = this.createElement('div','','container')
        const page = this.createElement('div','','page')
        page.appendChild(this.createElement('h1','~ The Menu ~', 'title'))




        container.appendChild(page)
        content.appendChild(container) 
    }
}

export {menu}