class home {
    static createElement(e, t, c) {
        const tmp = document.createElement(e)
        tmp.textContent = t
        if (c){
            tmp.classList.add(c)
        }
        return tmp
    }
    static buildHours() {
        const container = this.createElement('div','','hours-container')
        const hours = ['Monday: 6am - 10pm', 'Tuesday: 6am - 10pm', 'Wednesday: 6am - 10pm', 'Thursday: 6am - 10pm', 'Friday: 12pm - 8pm', 'Saturday: 12pm - 8pm','Sunday: CLOSED']
        for (let i = 0; i < hours.length; i++){
            container.appendChild(this.createElement('p',hours[i], ''))
        }
        return container
    }
    static buildLocations() {
        const container = this.createElement('div','','locations-container')
        const location1 = this.createElement('div','', 'location')
        const location2 = this.createElement('div','', 'location')
        location1.appendChild(this.createElement('p','311 S 6th Street Colombia, MO',''))
        location1.appendChild(this.createElement('button','Order Ahead','order-ahead'))

        location2.appendChild(this.createElement('p','320 E Apple Str. Gotham City, NY',''))
        location2.appendChild(this.createElement('button','Order Ahead','order-ahead'))

        container.appendChild(location1)
        container.appendChild(location2)
        return container
    }

    static build(content) {
        const container = this.createElement('div','','container')
        const page = this.createElement('div','','page')
        page.appendChild(this.createElement('h1','~ Chess Cuisine ~', 'title'))
        page.appendChild(this.createElement("p",'"Chess Cuisine is not just a place to dine; it is a sanctuary where minds meet, battles are waged, and friendships are forged over the timeless game of chess."','quote'))
        page.appendChild(this.createElement('p','~ Business Hours ~', 'subtitle'))
        page.appendChild(this.buildHours())
        page.appendChild(this.createElement('p','~ Locations ~', 'subtitle'))
        page.appendChild(this.buildLocations())
        




        container.appendChild(page)
        content.appendChild(container) 
    }
}

export {home}