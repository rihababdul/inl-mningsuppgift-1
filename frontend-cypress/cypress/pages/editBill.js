/// <reference types="cypress" />


const viewButtonBills = ':nth-child(3) > .btn'
const editBillBtn = ':nth-child(2) > .action'
const editBillButton = '.menu > :nth-child(1)'
const billCheckBox = '.checkbox'
const saveButton = '.blue'

function editBill(cy){
    cy.get(viewButtonBills).click()
    cy.get(editBillBtn).click()
    cy.get(editBillButton).click()
    cy.get(billCheckBox).click()
    cy.get(saveButton).click()
    
    }

//Exports
module.exports = {
    editBill
}