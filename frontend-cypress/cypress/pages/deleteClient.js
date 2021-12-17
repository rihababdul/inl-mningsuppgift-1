/// <reference types="cypress" />

const viewButtonClients = '.blocks > :nth-child(2) > .btn'
const deleteBtn = ':nth-child(3) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'


function deleteClient(cy){
    cy.get(viewButtonClients).click() 
    cy.get(deleteBtn).click()
    cy.get(deleteButton).click()
    cy.get(backButton).click()
    
}
    

 //Exports

 module.exports = {
     deleteClient
 }