import {IDS} from '../../src/data/ids'


describe("connect to the homepage",()=>{
    context("visiting the home page",() => {
        beforeEach(() => {
            cy.viewport(1280, 720)
          })
          describe("you can click the toggleBox button",()=>{
              it("should open the box", ()=>{
                cy.visit("/")
                cy.get(`[data-id=${IDS.toggleBoxHomePage}-button]`).click()
                cy.get(`[data-id=${IDS.toggleBoxHomePage}-box]`).should('be.visible')
            })
        })
    })
})