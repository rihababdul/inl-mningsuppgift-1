/// //<reference types="cypress" />

//const { login } = require("./login")

// Elements

const viewButtonBills = ':nth-child(3) > .btn' 
const addBill = 'h2 > .btn' 
const inputBill = 'input'
const saveButton = '.blue'


function createBill(cy){
    cy.get(viewButtonBills).click()
    cy.get(addBill).click()
    cy.get(inputBill).type('1000')
    cy.get(saveButton).click()
    
    }


    //Exports
    module.exports = {
        createBill
        
    }