class about {
    static createElement(e, t, c) {
        const tmp = document.createElement(e)
        tmp.textContent = t
        if (c){
            tmp.classList.add(c)
        }
        return tmp
    }
    static buildStatement() {
        const container = this.createElement('div', '', 'statement-container')
        const s = 'Where chess meets cuisine: Our mission is to create an unforgettable dining experience, blending strategic play with culinary delight.'
        const statement = this.createElement('p',s,'statement')
        container.appendChild(statement)
        return container
    }
    static createLink(t, href) {
        const container = this.createElement('p','','link')
        const tmp = document.createElement('a')
        tmp.textContent = t
        tmp.href = href
        tmp.target = '_blank'
        container.appendChild(tmp)
        return container
    }
    static buildContact() {
        const container = this.createElement('div','','hours-container')
        container.appendChild(this.createElement('p','Email','contact-header'))
        container.appendChild(this.createElement('p','CCuisine@notreal.com', 'fake-link'))
        container.appendChild(this.createElement('p','Phone','contact-header'))
        container.appendChild(this.createElement('p','123-456-7890', 'fake-link'))
        container.appendChild(this.createElement('p','Github','contact-header'))
        container.appendChild(this.createLink('github.com/xavierhampton', 'https://www.github.com/xavierhampton'))
        return container
    }

    static build(content) {
        const container = this.createElement('div','','container')
        const page = this.createElement('div','','page')
        page.appendChild(this.createElement('h1','~ About ~', 'title'))
        page.appendChild(this.buildStatement())
        page.appendChild(this.createElement('p','~ Contact Us! ~', 'subtitle'))
        page.appendChild(this.buildContact())



        container.appendChild(page)
        content.appendChild(container) 
    }
}

export {about}