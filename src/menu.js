import menu1 from './assets/menu1.png'
import menu2 from './assets/menu2.png'
import menu3 from './assets/menu3.png'
import menu4 from './assets/menu4.png'
import menu5 from './assets/menu5.png'

class menu {
    static createElement(e, t, c) {
        const tmp = document.createElement(e)
        tmp.textContent = t
        if (c){
            tmp.classList.add(c)
        }
        return tmp
    }
    static makeItem(title,text,src) {
        const img = new Image()
        img.classList.add('menu-image')
        img.src = src

        const container = this.createElement('div', '', 'food-container')
        const headerContainer = this.createElement('div', '', 'h-inner-container')
        headerContainer.appendChild(this.createElement('p',title,'food-title'))
        headerContainer.appendChild(this.createElement('button','Order','order-button'))
        const innerContainer = this.createElement('div', '', 'inner-container')
        innerContainer.appendChild(this.createElement('p',text,'food-description'))
        innerContainer.appendChild(img)

        container.appendChild(headerContainer)
        container.appendChild(innerContainer)

        return container
    }

    static build(content) {
        const container = this.createElement('div','','container')
        const page = this.createElement('div','','page')
        page.appendChild(this.createElement('h1','~ The Menu ~', 'title'))
        page.appendChild(this.makeItem('En Passant Platter', 'A regal assortment of grilled meats including succulent steak medallions, herb-roasted chicken, and garlic butter shrimp, served with roasted vegetables and garlic mashed potatoes. ', menu1))
        page.appendChild(this.makeItem("Bishop's Baked Brie", 'Warm, gooey Brie cheese enveloped in flaky puff pastry, topped with a sweet fig jam and toasted almonds. A decadent indulgence fit for the most astute strategist.', menu2))
        page.appendChild(this.makeItem("Rook's Risotto Royale", "Creamy Arborio rice simmered in a rich mushroom and truffle broth, crowned with shavings of Parmesan cheese. A hearty dish worthy of the rook's steadfast defense.", menu3))
        page.appendChild(this.makeItem("Knight's Delight Kabobs", 'Tender marinated chicken or beef skewers, grilled to perfection and served with a side of herb-infused rice. A swift and satisfying choice for any hungry knight.', menu4))
        page.appendChild(this.makeItem("Queen's Gambit Salad", "A vibrant mix of fresh greens, roasted beets, candied walnuts, and tangy goat cheese, drizzled with a balsamic reduction. Fit for a queen's strategic palate.", menu5))
        container.appendChild(page)
        content.appendChild(container) 
    }
}

export {menu}