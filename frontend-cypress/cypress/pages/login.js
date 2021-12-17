/// <reference types="cypress" />

// Elements

const inputUsername = ':nth-child(1) > input'
const inputPassword = ':nth-child(2) > input'
const loginButton = '.blue'

function login(cy, username, password){
    cy.get(inputUsername).type(username)
    cy.get(inputPassword).type(password)
    cy.get(loginButton).click()
    //cy.contains(contentToConfirm)
  
  }


  // exports

  module.exports = {
      login
  }