/// <reference types="cypress" />

// Elements

const inputUsername = ':nth-child(1) > input'
const inputPassword = ':nth-child(2) > input'
const loginButton = '.blue'
const viewButtonClients = '.blocks > :nth-child(2) > .btn'
const createButton = 'h2 > .btn'
const inputClientName = ':nth-child(1) > input'
const inputEmail = ':nth-child(2) > input'
const inputPhoneNumber = ':nth-child(3) > input'
const saveButton = '.blue'
const editBtn = ':nth-child(1) > .action > img'
const editButton = '.menu > :nth-child(1)'
const editInput = ':nth-child(5) > input'
const deleteBtn = ':nth-child(3) > .action > img'
const deleteButton = '.menu > :nth-child(2)'
const backButton = ':nth-child(3) > .btn'
const viewButtonBills = ':nth-child(3) > .btn'
const createBill = 'h2 > .btn'
const inputBill = 'input'
const editBillBtn = ':nth-child(2) > .action'
const editBillButton = '.menu > :nth-child(1)'
const billCheckBox = '.checkbox'


function loginUser(cy, username, password, contentToConfirm){
    cy.get(inputUsername).type(username)
    cy.get(inputPassword).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
  
  }

 function createClient(cy){
    cy.get(viewButtonClients).click()
    cy.get(createButton).click()
    cy.get(inputClientName).type('testname')
    cy.get(inputEmail).type('test@test.com')
    cy.get(inputPhoneNumber).type('0123456789')
    cy.get(saveButton).click()
    


 }



function editClient(cy){  
cy.get(viewButtonClients).click()    
cy.get(editBtn).click()
cy.get(editButton).click()
cy.get(editInput).type('5')
cy.get(saveButton).click()


}

function deleteClient(cy){
cy.get(deleteBtn).click()
cy.get(deleteButton).click()
cy.get(backButton).click()
}


function addBill(cy){
cy.get(viewButtonBills).click()
cy.get(createBill).click()
cy.get(inputBill).type('1000')
cy.get(saveButton).click()


}


function editBill(cy){
cy.get(editBillBtn).click()
cy.get(editBillButton).click()
cy.get(billCheckBox).click()
cy.get(saveButton).click()

}



// Exports
module.exports = {
    loginUser,
    createClient,
    editClient,
    deleteClient,
    addBill,
    editBill


}