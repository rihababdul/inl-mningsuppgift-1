/// <reference types="cypress" />

//const { loginUser } = require("./login")

// Elements

const viewButtonClients = '.blocks > :nth-child(2) > .btn'
const createButton = 'h2 > .btn'
const inputClientName = ':nth-child(1) > input'
const inputEmail = ':nth-child(2) > input'
const inputPhoneNumber = ':nth-child(3) > input'
const saveButton = '.blue'


function createClient(cy){
    cy.get(viewButtonClients).click()
    cy.get(createButton).click()
    cy.get(inputClientName).type('testname')
    cy.get(inputEmail).type('test@test.com')
    cy.get(inputPhoneNumber).type('0123456789')
    cy.get(saveButton).click()

 }
    



 //Exports

 module.exports = {
     createClient
 }