/// <reference types="cypress" />

//const viewButtonClients = ':nth-child(3) > .btn'
const viewButtonClients = '.blocks > :nth-child(2) > .btn'
const editBtn = ':nth-child(3) > .action > img'
const editButton = '.menu > :nth-child(1)'
const editInput = ':nth-child(5) > input'
const saveButton = '.blue'

function editClient(cy){  
    cy.get(viewButtonClients).click() 
    cy.get(editBtn).click()
    cy.get(editButton).click()
    cy.get(editInput).type('5')
    cy.get(saveButton).click()
    
    }

    // exports
    module.exports = {
        editClient
    }