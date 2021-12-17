/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as targets from '../targets/targets'
import * as loginFuncs from '../pages/login'
import * as createClientFuncs from '../pages/createClient'
import * as editClientFuncs from '../pages/editClient'
import * as deleteClientFuncs from '../pages/deleteClient'
import * as createBillFuncs from '../pages/createBill'
import * as editBillFuncs from '../pages/editBill'
import * as logoutFuncs from '../pages/logout'


// Test suite
describe('Test suite - with page objects', function(){

   beforeEach(() => {
      cy.visit(targets.base_url)
      loginFuncs.login(cy, targets.username, targets.password)
       // indexFuncs.checkTitleOfIndexPage(cy)


    })

     it('Logga ut', function(){
     //loginFuncs.login(cy, targets.username, targets.password)
     logoutFuncs.logout(cy)
     //login.login(cy, targets.username, targets.password, 'Tester Hotel Overview')

   })

    it('Skapa klient', function(){
        //loginFuncs.login(cy, targets.username, targets.password)
        createClientFuncs.createClient(cy)
        logoutFuncs.logout(cy)
    })

    it('Redigera klient', function(){
        //loginFuncs.login(cy, targets.username, targets.password)
        editClientFuncs.editClient(cy)
        logoutFuncs.logout(cy)
    })

    it('Radera klient', function(){
        //loginFuncs.login(cy, targets.username, targets.password)
        deleteClientFuncs.deleteClient(cy)
        logoutFuncs.logout(cy)
    })

    it('Lägg till räkning', function(){
      //loginFuncs.login(cy, targets.username, targets.password)
      cy.wait(500)
      createBillFuncs.createBill(cy)
      logoutFuncs.logout(cy)

    })

    it('Redigera räkning', function(){
        //loginFuncs.login(cy, targets.username, targets.password )
        cy.wait(1000)
        editBillFuncs.editBill(cy)
        logoutFuncs.logout(cy)
    })


    

})


     



