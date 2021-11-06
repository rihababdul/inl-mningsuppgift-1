/// <reference types="cypress" />

const { editClient } = require("./dashboardPage")

//Elements
const indexPageTitle = 'Testers Hotel'
const inputUsername = ':nth-child(1) > input'
const inputPassword = ':nth-child(2) > input'
const loginButton = '.blue'
const viewButton = '.blocks > :nth-child(2) > .btn'
const createButton = 'h2 > .btn'
const inputClientName = ':nth-child(1) > input'
const inputEmail = ':nth-child(2) > input'
const inputPhoneNumber = ':nth-child(3) > input'
const saveButton = '.blue'

//Actions / functions
function checkTitleOfIndexPage(cy){
    cy.title().should('eq', indexPageTitle)

}


    


function createClient(cy, contentToConfirm){
cy.get(viewButton).click()
cy.get(createButton).click()
cy.get(inputClientName).type('testname')
cy.get(inputEmail).type('test@test.com')
cy.get(inputPhoneNumber).type('0123456789')
cy.get(saveButton).click()
cy.contains(contentToConfirm)


}





module.exports ={
    checkTitleOfIndexPage,
    createClient,
    editClient
    
}